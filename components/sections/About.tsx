export default function About() {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl mb-12">my journey</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              My journey began at the intersection of technology and creativity. With a background in both design and development, I've spent the last several years crafting digital experiences that bridge the gap between functionality and aesthetics.
            </p>
            <p className="text-lg">
              Today, I focus on creating innovative solutions that not only solve problems but also inspire and delight users. My approach combines technical expertise with an eye for design, ensuring that every project I tackle is both beautiful and functional.
            </p>
          </div>
          <div className="space-y-6">
            <div className="project-card">
              <h3 className="text-xl font-bold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'UI/UX Design', 'Node.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary/10 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}