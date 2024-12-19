import { socialLinks } from '@/data/social-links';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl mb-12">Let's Connect</h2>
        <div className="flex justify-center gap-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}