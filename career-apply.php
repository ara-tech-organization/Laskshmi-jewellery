<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://srilakshmithangamaaligai.com');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Collect fields
$firstName   = trim($_POST['firstName']   ?? '');
$lastName    = trim($_POST['lastName']    ?? '');
$email       = trim($_POST['email']       ?? '');
$phone       = trim($_POST['phone']       ?? '');
$position    = trim($_POST['position']    ?? '');
$experience  = trim($_POST['experience']  ?? '');
$description = trim($_POST['description'] ?? '');

if (!$firstName || !$lastName || !$email || !$phone || !$position || !$experience) {
    echo json_encode(['success' => false, 'message' => 'Required fields are missing.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// Handle resume upload
$resumeInfo = '';
$attachmentPath = '';
if (!empty($_FILES['resume']['name'])) {
    $allowed = ['pdf', 'doc', 'docx'];
    $ext = strtolower(pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, $allowed)) {
        echo json_encode(['success' => false, 'message' => 'Invalid resume file type. Use PDF, DOC, or DOCX.']);
        exit;
    }
    if ($_FILES['resume']['size'] > 5 * 1024 * 1024) {
        echo json_encode(['success' => false, 'message' => 'Resume file must be under 5 MB.']);
        exit;
    }
    $uploadDir = __DIR__ . '/uploads/resumes/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    $safeName = time() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '_', $_FILES['resume']['name']);
    $dest = $uploadDir . $safeName;
    if (move_uploaded_file($_FILES['resume']['tmp_name'], $dest)) {
        $attachmentPath = $dest;
        $resumeInfo = "Resume: {$_FILES['resume']['name']}\n";
    }
}

// Build email
$to      = 'aradicovertech02@gmail.com';
$subject = "Career Application – $position – $firstName $lastName";

$body  = "New career application received from the website.\n\n";
$body .= "Name       : $firstName $lastName\n";
$body .= "Email      : $email\n";
$body .= "Phone      : $phone\n";
$body .= "Position   : $position\n";
$body .= "Experience : $experience\n";
$body .= $resumeInfo;
$body .= "\nCover Note :\n" . ($description ?: 'Not provided') . "\n";

$headers  = "From: Sri Lakshmi Careers <noreply@srilakshmithangamaaligai.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Attach resume if uploaded
if ($attachmentPath) {
    $boundary = md5(time());
    $headers  = "From: Sri Lakshmi Careers <noreply@srilakshmithangamaaligai.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $mime  = "--$boundary\r\n";
    $mime .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $mime .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $mime .= $body . "\r\n";

    $fileData = chunk_split(base64_encode(file_get_contents($attachmentPath)));
    $mime .= "--$boundary\r\n";
    $mime .= "Content-Type: application/octet-stream; name=\"" . basename($attachmentPath) . "\"\r\n";
    $mime .= "Content-Transfer-Encoding: base64\r\n";
    $mime .= "Content-Disposition: attachment; filename=\"" . basename($attachmentPath) . "\"\r\n\r\n";
    $mime .= $fileData . "\r\n";
    $mime .= "--$boundary--";

    $sent = mail($to, $subject, $mime, $headers);
} else {
    $sent = mail($to, $subject, $body, $headers);
}

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
}
