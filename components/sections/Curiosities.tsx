import { curiosities } from '@/data/curiosities';

export default function Curiosities() {
  return (
    <section id="curiosities" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl mb-12">my curiousities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curiosities.map((curiosity) => (
            <div 
              key={curiosity.id} 
              className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-background/70 transition-colors duration-300"
            >
              <h3 className="text-2xl mb-4">{curiosity.title}</h3>
              <p className="text-foreground/80">{curiosity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
