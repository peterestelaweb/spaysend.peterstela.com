import React, { useState, useEffect } from 'react';
import { SLIDES, PAYSEND_PURPLE } from './constants';
import { MockupContainer } from './components/Mockups';
import { ChevronRight, ChevronLeft, RefreshCcw, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
  const currentSlide = SLIDES[currentSlideIndex];
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === SLIDES.length - 1;

  const handleNext = () => {
    if (!isLastSlide) {
      setDirection('next');
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstSlide) {
      setDirection('prev');
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setDirection('prev');
    setCurrentSlideIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  // Scroll to top of content on slide change for mobile users
  useEffect(() => {
    const contentPanel = document.getElementById('content-panel');
    if (contentPanel) {
      contentPanel.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlideIndex]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:items-center md:justify-center overflow-x-hidden md:p-6">
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-1/2 bg-[#5d2cff] -skew-y-3 origin-top-left transform scale-110 z-0 opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full md:max-w-6xl md:h-[85vh] bg-white md:rounded-3xl shadow-none md:shadow-2xl flex flex-col md:flex-row overflow-hidden md:overflow-hidden">
        
        {/* Left Panel: Content */}
        <div id="content-panel" className="w-full md:w-1/2 flex flex-col relative bg-white md:overflow-y-auto scrollbar-hide shrink-0 order-1 h-full">
          
          {/* Header - Now part of the flow to prevent overlap */}
          <div className="px-6 pt-6 pb-2 md:px-12 md:pt-12 md:pb-4 flex justify-between items-center text-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase z-20 shrink-0">
            <span>Guía Paysend</span>
            <div className="flex gap-1">
               {SLIDES.map((_, idx) => (
                   <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlideIndex ? `w-6 md:w-8 bg-[#5d2cff]` : 'w-2 bg-gray-200'}`}
                   />
               ))}
            </div>
          </div>

          {/* Slide Content */}
          <div key={currentSlide.id} className="flex-1 px-6 md:px-12 pb-12 flex flex-col justify-center animate-fadeIn">
            <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-violet-100 text-[#5d2cff] rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                {currentSlide.type === 'intro' ? 'Inicio' : currentSlide.type === 'success' ? 'Finalizado' : `Paso ${currentSlideIndex}`}
                </span>
                
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {currentSlide.title}
                </h1>
                
                {currentSlide.subtitle && (
                <h2 className="text-lg md:text-xl text-[#5d2cff] font-semibold mb-6">
                    {currentSlide.subtitle}
                </h2>
                )}

                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {currentSlide.content.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                    {currentSlide.type !== 'intro' && <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#5d2cff] shrink-0"></div>}
                    <p dangerouslySetInnerHTML={{ 
                        __html: text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-gray-800">$1</span>') 
                        }} 
                    />
                    </div>
                ))}
                </div>

                {/* Actions */}
                <div className="mt-auto md:mt-8 flex gap-4">
                    {currentSlide.type === 'intro' ? (
                        <button onClick={handleNext} className="w-full md:w-auto group flex items-center justify-center gap-2 bg-[#5d2cff] hover:bg-[#4b1fd6] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-violet-300 transform hover:-translate-y-1">
                            Comenzar Guía
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    ) : currentSlide.type === 'success' ? (
                        <button onClick={handleRestart} className="w-full md:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1">
                            <RefreshCcw size={20} />
                            Reiniciar
                        </button>
                    ) : (
                        <div className="flex gap-3 md:gap-4 w-full md:w-auto">
                            <button onClick={handlePrev} className="flex-1 md:flex-none px-4 md:px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 font-bold transition-colors">
                                Atrás
                            </button>
                            <button onClick={handleNext} className="flex-1 md:flex-none px-6 md:px-8 py-3 bg-[#5d2cff] text-white rounded-xl font-bold shadow-lg shadow-violet-200 hover:bg-[#4b1fd6] transition-all flex items-center justify-center gap-2">
                                Siguiente
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Mockup Display */}
        <div className={`w-full md:w-1/2 bg-gray-50 relative flex items-center justify-center p-6 md:p-8 transition-colors duration-500 min-h-[500px] md:min-h-full shrink-0 order-2 border-t md:border-t-0 md:border-l border-gray-100 ${currentSlide.mockupType === 'success' ? 'bg-green-50' : 'bg-gray-50'}`}>
             
             {/* Decorative grid */}
             <div className="absolute inset-0 z-0 opacity-[0.03]" 
                  style={{ backgroundImage: 'radial-gradient(#5d2cff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
             </div>

             <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                 {currentSlide.mockupType !== 'none' ? (
                    <div className="animate-slideUpFade w-full flex justify-center">
                        <MockupContainer 
                            type={currentSlide.mockupType} 
                            highlights={currentSlide.highlight} 
                        />
                    </div>
                 ) : (
                    <div className="text-center animate-fadeIn opacity-50 py-10 md:py-0">
                         <div className="w-24 h-24 md:w-32 md:h-32 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BookOpen size={40} className="md:w-12 md:h-12 text-[#5d2cff]" />
                         </div>
                         <p className="text-gray-400 font-medium">Guía Visual Interactiva</p>
                    </div>
                 )}
             </div>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(40px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slideUpFade {
            animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;