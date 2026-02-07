import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoDemo = () => {
  const [showHVACVideo, setShowHVACVideo] = useState(false);
  const [showLandscapeVideo, setShowLandscapeVideo] = useState(false);

  return (
    <>
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
              Watch real HVAC emergency calls and see how our AI handles customer conversations seamlessly.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* HVAC Emergency Video - Portrait/Vertical */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/2 lg:w-2/5">
                <h3 className="text-2xl font-bold mb-3">🚨 HVAC Emergency Call</h3>
                <p className="text-muted-foreground mb-4">
                  Watch how Qadr AI handles a real 2 AM emergency furnace call - detecting urgency, 
                  collecting system details, and booking same-day service.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Emergency Detection
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Auto-Booking
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    2:40 mins
                  </span>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-3/5">
                <div className="relative w-full max-w-sm mx-auto">
                  {!showHVACVideo ? (
                    <div 
                      className="relative rounded-2xl overflow-hidden border border-border/50 glow-effect cursor-pointer"
                      style={{ aspectRatio: '9/16' }}
                      onClick={() => setShowHVACVideo(true)}
                    >
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          backgroundImage: 'url(https://img.youtube.com/vi/9VGBsRnagxc/maxresdefault.jpg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-black/40" />
                        <button className="group relative w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:scale-110 z-10">
                          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '9/16' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/9VGBsRnagxc?autoplay=1"
                        title="HVAC Emergency Call Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Landscape Demo Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3">📞 Complete Call Walkthrough</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See the full customer experience from greeting to appointment confirmation - 
                  natural conversations that keep your customers happy.
                </p>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 glow-effect">
                {!showLandscapeVideo ? (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    style={{
                      backgroundImage: 'url(https://img.youtube.com/vi/Cxj32SvtH7o/maxresdefault.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    onClick={() => setShowLandscapeVideo(true)}
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
                    title="Qadr AI Complete Demo"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
          </div>

          <p className="text-center text-muted-foreground mt-10 text-sm">
            Real calls, real results. See how Qadr AI transforms customer calls into revenue.
          </p>
        </div>
      </section>
    </>
  );
};

export default VideoDemo;
