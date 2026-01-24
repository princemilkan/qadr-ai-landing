import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoDemo = () => {
  const [showMainVideo, setShowMainVideo] = useState(false);
  const [showReelVideo, setShowReelVideo] = useState(false);

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
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            See <span className="text-gradient">Qadr AI</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how our AI handles real customer calls—answering questions, booking appointments, 
            and delivering a seamless experience every time.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Demo Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold mb-2">Full Demonstration</h3>
              <p className="text-muted-foreground">
                See the complete Qadr AI experience
              </p>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 glow-effect">
              {!showMainVideo ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  style={{
                    backgroundImage: 'url(https://img.youtube.com/vi/Cxj32SvtH7o/maxresdefault.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => setShowMainVideo(true)}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <button className="group relative w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:scale-110 z-10">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/Cxj32SvtH7o?autoplay=1"
                  title="Qadr AI Full Demo"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>

          {/* Emergency Call Demo - HVAC Short */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold mb-2">
                <span className="text-red-500">🚨</span> Emergency Call Handling
              </h3>
              <p className="text-muted-foreground">
                Watch AI handle a real HVAC emergency appointment booking (2:40)
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-effect mx-auto max-w-sm">
              <div className="relative" style={{ aspectRatio: '9/16' }}>
                {!showReelVideo ? (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    style={{
                      backgroundImage: 'url(https://img.youtube.com/vi/9VGBsRnagxc/maxresdefault.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    onClick={() => setShowReelVideo(true)}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                    <button className="group relative w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:scale-110 z-10">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </button>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/9VGBsRnagxc?autoplay=1"
                    title="HVAC Emergency Demo"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </motion.div>

        </div>

        <p className="text-center text-muted-foreground mt-10 text-sm">
          See how Qadr AI transforms customer calls into seamless experiences
        </p>
      </div>
    </section>
  );
};

export default VideoDemo;
