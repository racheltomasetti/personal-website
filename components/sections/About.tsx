export default function About() {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl mb-12">my journey</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              Here is where I will go into detail about who I am. 
            </p>
            <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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