import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, Send } from 'lucide-react';
import { useScrollAnimation, fadeInLeft, fadeInRight, staggerContainer } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../context/LanguageContext';

const ContactSection = ({ id }) => {
  const { ref, inView } = useScrollAnimation();
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    // Enviar la consulta por correo a Savia
    const subject = encodeURIComponent(
      `Nueva consulta de ${data.name}${data.company ? ` - ${data.company}` : ''}`
    );
    const body = encodeURIComponent(
      `Nombre: ${data.name}\n` +
      `Empresa / Organización: ${data.company}\n` +
      `Email: ${data.email}\n` +
      `Teléfono: ${data.phone || 'No proporcionado'}\n\n` +
      `Mensaje:\n${data.message}`
    );
    setTimeout(() => {
      window.location.href = `mailto:info@saviasacr.com?subject=${subject}&body=${body}`;
      setSending(false);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <section id={id} className="section-padding bg-white" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container-max"
      >
        <SectionTitle badge={t.contact.badge} title={t.contact.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <motion.div variants={fadeInLeft}>
            <h3 className="font-display text-2xl font-bold text-primary mb-8">
              {t.contact.info.title}
            </h3>
            <div className="space-y-6 mb-10">
                {[
                  { icon: Mail, text: t.contact.info.email },
                  { icon: Phone, text: t.contact.info.phone },
                  { icon: MapPin, text: t.contact.info.location },
                ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="text-gray-600">{text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/50683505275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
            >
              <MessageCircle size={20} />
              {t.footer.whatsapp}
            </a>

          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInRight}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <CheckCircle size={48} className="text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-gray-600">{t.contact.successMessage}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <input
                    {...register('name', { required: true })}
                    placeholder={t.contact.namePlaceholder}
                    className={inputClass}
                  />
                  {errors.name && <p className={errorClass}>*</p>}
                </div>

                {/* Company */}
                <div>
                  <input
                    {...register('company', { required: true })}
                    placeholder={t.contact.companyPlaceholder}
                    className={inputClass}
                  />
                  {errors.company && <p className={errorClass}>*</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    placeholder={t.contact.emailPlaceholder}
                    type="email"
                    className={inputClass}
                  />
                  {errors.email && <p className={errorClass}>*</p>}
                </div>

                {/* Phone */}
                <div>
                  <input
                    {...register('phone')}
                    placeholder={t.contact.phonePlaceholder}
                    type="tel"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    {...register('message', { required: true, minLength: 20 })}
                    placeholder={t.contact.messagePlaceholder}
                    rows={4}
                    className={inputClass}
                  />
                  {errors.message && <p className={errorClass}>*</p>}
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    {...register('consent')}
                    className="mt-1 w-4 h-4 accent-primary"
                  />
                  <span className="text-sm text-gray-500">{t.contact.consent}</span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-gold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {t.contact.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
