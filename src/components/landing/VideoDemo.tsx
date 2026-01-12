import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoDemo = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">See It In Action</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            See <span className="text-gradient">Qadr AI</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how our AI handles real customer calls—answering questions, booking appointments, 
            and delivering a seamless experience every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 glow-effect">
            {/* Video placeholder with gradient background */}
            <div className="absolute inset-0 card-gradient flex items-center justify-center">
              {/* Play button */}
              <button className="group relative w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            </div>

            {/* Video embed placeholder - replace src with actual video */}
            {/* Uncomment below and add your video URL:
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Qadr AI Demo"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            See how Qadr AI transforms customer calls into seamless experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;
