import { resources } from '@/data/resources';

export default function Resources() {
  return (
    <section id="resources" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl mb-12">Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.title} className="project-card">
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-foreground/80 mb-4">
                {resource.description}
              </p>
              <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}