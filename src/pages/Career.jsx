import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Briefcase, FileText, Send, Upload, CheckCircle } from 'lucide-react';

const GOLD = '#d4ad5a';
const MAROON = '#922e61';

const positions = [
  'Sales Executive',
  'Jewellery Designer',
  'Store Manager',
  'Goldsmith / Craftsman',
  'Customer Service Executive',
  'Billing & Accounts',
  'Other',
];

export default function Career() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    position: '', experience: '', description: '',
  });
  const [resume, setResume]       = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [apiError, setApiError]   = useState('');
  const [errors, setErrors]       = useState({});
  const fileRef = useRef();

  const validate = () => {
    const e = {};
    if (!form.firstName.trim())    e.firstName   = 'First name is required';
    if (!form.lastName.trim())     e.lastName    = 'Last name is required';
    if (!form.email.trim())        e.email       = 'Email is required';
    if (!form.phone.trim())        e.phone       = 'Phone number is required';
    if (!form.position)            e.position    = 'Please select a position';
    if (!form.experience.trim())   e.experience  = 'Experience is required';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setApiError('');
    try {
      const fd = new FormData();
      fd.append('firstName',   form.firstName);
      fd.append('lastName',    form.lastName);
      fd.append('email',       form.email);
      fd.append('phone',       form.phone);
      fd.append('position',    form.position);
      fd.append('experience',  form.experience);
      fd.append('description', form.description);
      fd.append('source',      'Website Career Page');
      if (resume) fd.append('resume', resume);

      const res  = await fetch('/api/career-apply.php', { method: 'POST', body: fd });
      const text = await res.text();
      let data;
      try { 
        const jsonStr = text.substring(text.indexOf('{'));
        data = JSON.parse(jsonStr); 
      } catch { 
        throw new Error('Bad response: ' + text.slice(0, 200)); 
      }

      if (data.success) {
        setSubmitted(true);
      } else {
        setApiError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setApiError('Error: ' + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  const field = (name) => ({
    width: '100%', padding: '13px 16px 13px 44px',
    border: `1.5px solid ${errors[name] ? '#e05252' : 'rgba(212,173,90,0.25)'}`,
    borderRadius: '10px', fontSize: '14px', fontFamily: "'Poppins',sans-serif",
    color: '#1a1a1a', background: '#fff', outline: 'none',
    boxSizing: 'border-box', transition: 'border-color 0.2s',
  });
  const label  = { fontSize: '13px', fontWeight: '600', color: '#3a3a3a', marginBottom: '6px', display: 'block', fontFamily: "'Poppins',sans-serif" };
  const icon   = (top) => ({ position: 'absolute', left: '13px', top: top || '50%', transform: top ? 'none' : 'translateY(-50%)', color: GOLD, pointerEvents: 'none' });
  const err    = { fontSize: '11px', color: '#e05252', marginTop: '4px', fontFamily: "'Poppins',sans-serif" };
  const focus  = (e) => { e.target.style.borderColor = GOLD; };
  const blur   = (name) => (e) => { e.target.style.borderColor = errors[name] ? '#e05252' : 'rgba(212,173,90,0.25)'; };

  return (
    <div style={{ fontFamily: "'Poppins',sans-serif", background: '#FAF6EE', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg,${MAROON} 0%,#7a2451 100%)`, padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.06' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(212,173,90,0.15)', border: '1px solid rgba(212,173,90,0.40)', borderRadius: '50px', marginBottom: '20px' }}>
            <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: GOLD }}>Join Our Team</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px,3.2vw,42px)', fontWeight: '700', color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>
            Build Your Career With<br /><span style={{ color: GOLD }}>Sri Lakshmi Thanga Maaligai</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.8 }}>
            Be part of a legacy spanning 50+ years. We're looking for passionate individuals to grow with us.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '80px 0 100px' }}>
        <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '80px 40px', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 32px rgba(146,46,97,0.08)', border: '1px solid rgba(212,173,90,0.15)' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle size={34} color="#fff" />
              </div>
              <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 12px' }}>Application Submitted!</h2>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 32px' }}>
                Thank you, <strong>{form.firstName} {form.lastName}</strong>. Our team will review your application and contact you at <strong>{form.email}</strong> within 3–5 business days.
              </p>
              <Link
                to="/"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 32px', background: `linear-gradient(135deg,${MAROON},#7a2451)`, color: '#fff', borderRadius: '50px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', fontFamily: "'Poppins',sans-serif", boxShadow: '0 4px 16px rgba(146,46,97,0.25)', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(146,46,97,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(146,46,97,0.25)'; }}
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div style={{ background: '#fff', borderRadius: '24px', boxShadow: '0 4px 32px rgba(146,46,97,0.08)', border: '1px solid rgba(212,173,90,0.15)', padding: 'clamp(28px,5vw,56px)' }}>
              <div style={{ marginBottom: '36px' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: GOLD, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>Career Application</div>
                <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: '700', color: '#1a1a1a', margin: '0 0 8px' }}>Apply for a Position</h2>
                <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>Fill in the details below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                  {/* First Name */}
                  <div>
                    <label style={label}>First Name *</label>
                    <div style={{ position: 'relative' }}>
                      <span style={icon()}><User size={15} /></span>
                      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" style={field('firstName')} onFocus={focus} onBlur={blur('firstName')} />
                    </div>
                    {errors.firstName && <p style={err}>{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label style={label}>Last Name *</label>
                    <div style={{ position: 'relative' }}>
                      <span style={icon()}><User size={15} /></span>
                      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" style={field('lastName')} onFocus={focus} onBlur={blur('lastName')} />
                    </div>
                    {errors.lastName && <p style={err}>{errors.lastName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={label}>Email Address *</label>
                    <div style={{ position: 'relative' }}>
                      <span style={icon()}><Mail size={15} /></span>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={field('email')} onFocus={focus} onBlur={blur('email')} />
                    </div>
                    {errors.email && <p style={err}>{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={label}>Phone Number *</label>
                    <div style={{ position: 'relative' }}>
                      <span style={icon()}><Phone size={15} /></span>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" style={field('phone')} onFocus={focus} onBlur={blur('phone')} />
                    </div>
                    {errors.phone && <p style={err}>{errors.phone}</p>}
                  </div>

                  {/* Position */}
                  <div>
                    <label style={label}>Position Applying For *</label>
                    <div style={{ position: 'relative' }}>
                      <span style={icon()}><Briefcase size={15} /></span>
                      <select name="position" value={form.position} onChange={handleChange} style={{ ...field('position'), appearance: 'none', cursor: 'pointer', color: form.position ? '#1a1a1a' : '#999' }} onFocus={focus} onBlur={blur('position')}>
                        <option value="" disabled>Select a position</option>
                        {positions.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    {errors.position && <p style={err}>{errors.position}</p>}
                  </div>

                  {/* Experience */}
                  <div>
                    <label style={label}>Years of Experience *</label>
                    <div style={{ position: 'relative' }}>
                      <span style={icon()}><FileText size={15} /></span>
                      <input name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. 2 years" style={field('experience')} onFocus={focus} onBlur={blur('experience')} />
                    </div>
                    {errors.experience && <p style={err}>{errors.experience}</p>}
                  </div>

                  {/* Resume Upload */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={label}>Upload Resume <span style={{ fontSize: '11px', color: '#aaa', fontWeight: '400' }}>(Optional)</span></label>
                    <div
                      onClick={() => fileRef.current.click()}
                      style={{ border: `2px dashed ${resume ? GOLD : 'rgba(212,173,90,0.35)'}`, borderRadius: '10px', padding: '22px 20px', textAlign: 'center', cursor: 'pointer', background: resume ? 'rgba(212,173,90,0.05)' : '#fdfaf4', transition: 'all 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
                      onMouseLeave={e => e.currentTarget.style.borderColor = resume ? GOLD : 'rgba(212,173,90,0.35)'}
                    >
                      <Upload size={22} color={GOLD} style={{ marginBottom: '8px' }} />
                      <p style={{ margin: 0, fontSize: '13px', color: resume ? '#1a1a1a' : '#999', fontFamily: "'Poppins',sans-serif", fontWeight: resume ? '600' : '400' }}>
                        {resume ? `✓  ${resume.name}` : 'Click to upload your resume (PDF, DOC, DOCX)'}
                      </p>
                      {resume && <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#aaa', fontFamily: "'Poppins',sans-serif" }}>{(resume.size / 1024).toFixed(0)} KB</p>}
                    </div>
                    <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: 'none' }} />
                  </div>

                  {/* Description */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={label}>Description <span style={{ fontSize: '11px', color: '#aaa', fontWeight: '400' }}>(Optional)</span></label>
                    <div style={{ position: 'relative' }}>
                      <span style={icon('16px')}><FileText size={15} /></span>
                      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Tell us about yourself, your skills, and why you'd like to join Sri Lakshmi Thanga Maaligai..." rows={4} style={{ ...field('description'), resize: 'vertical', paddingTop: '13px', lineHeight: '1.7' }} onFocus={focus} onBlur={blur('description')} />
                    </div>
                    {errors.description && <p style={err}>{errors.description}</p>}
                  </div>

                </div>

                {apiError && (
                  <p style={{ marginTop: '16px', fontSize: '13px', color: '#e05252', fontFamily: "'Poppins',sans-serif", background: 'rgba(224,82,82,0.07)', border: '1px solid rgba(224,82,82,0.25)', borderRadius: '8px', padding: '10px 14px' }}>
                    {apiError}
                  </p>
                )}

                <div style={{ marginTop: '28px' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 32px', background: loading ? '#b08a3a' : `linear-gradient(135deg,${MAROON},#7a2451)`, color: '#fff', border: 'none', borderRadius: '50px', fontSize: '14px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: "'Poppins',sans-serif", boxShadow: '0 4px 16px rgba(146,46,97,0.25)', transition: 'all 0.3s ease', opacity: loading ? 0.8 : 1 }}
                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(146,46,97,0.30)'; } }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(146,46,97,0.25)'; }}
                  >
                    <Send size={16} />
                    {loading ? 'Sending Application…' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
