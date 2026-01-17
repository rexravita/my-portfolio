import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  User, 
  Terminal,
  Cpu,
  Monitor,
  Folder,
  FileText,
  Clock,
  Search,
  Settings,
  X,
  Minus,
  Maximize2
} from 'lucide-react';

/**
 * Rex Ravita Windows XP Portfolio
 * A nostalgic "Luna" theme desktop experience.
 */

const App = () => {
  const [openWindows, setOpenWindows] = useState(['about']); // Default open
  const [activeWindow, setActiveWindow] = useState('about');
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleWindow = (id) => {
    if (openWindows.includes(id)) {
      if (activeWindow === id) {
        setOpenWindows(openWindows.filter(w => w !== id));
      } else {
        setActiveWindow(id);
      }
    } else {
      setOpenWindows([...openWindows, id]);
      setActiveWindow(id);
    }
    setIsStartOpen(false);
  };

  const desktopIcons = [
    { id: 'about', name: 'My Profile', icon: <User size={32} className="text-blue-600" /> },
    { id: 'projects', name: 'My Projects', icon: <Folder size={32} className="text-yellow-500" /> },
    { id: 'skills', name: 'Technical Stack', icon: <Cpu size={32} className="text-green-600" /> },
    { id: 'contact', name: 'Contact Me', icon: <Mail size={32} className="text-red-500" /> },
  ];

  const projects = [
    { title: "CloudScale", tech: "React, D3", desc: "Cloud monitoring dashboard." },
    { title: "AI Search", tech: "Python, OpenAI", desc: "Semantic vector search." },
    { title: "SecurePay", tech: "Next.js, Stripe", desc: "Encrypted payment gateway." }
  ];

  // XP Styles
  const xpBlue = "bg-gradient-to-b from-[#0058EE] to-[#3b93ff]";
  const xpTaskbar = "bg-gradient-to-b from-[#245edb] via-[#3f8cf3] to-[#245edb]";
  const xpWindowBg = "bg-[#ECE9D8]";

  return (
    <div className="h-screen w-full overflow-hidden font-sans select-none relative" 
         style={{ 
           backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000")', // Abstract tech bliss vibe
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      
      {/* Desktop Icons */}
      <div className="p-4 grid grid-flow-row grid-cols-1 gap-8 w-max h-full content-start">
        {desktopIcons.map(icon => (
          <button 
            key={icon.id}
            onDoubleClick={() => toggleWindow(icon.id)}
            onClick={() => setActiveWindow(icon.id)}
            className={`flex flex-col items-center justify-center w-24 p-2 rounded hover:bg-white/20 border border-transparent hover:border-white/30 transition-all ${activeWindow === icon.id ? 'bg-white/10' : ''}`}
          >
            <div className="mb-1 drop-shadow-lg">{icon.icon}</div>
            <span className="text-white text-xs font-medium text-center drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
              {icon.name}
            </span>
          </button>
        ))}
      </div>

      {/* Windows Layer */}
      {openWindows.map(id => (
        <div 
          key={id}
          onClick={() => setActiveWindow(id)}
          className={`absolute flex flex-col rounded-t-lg shadow-2xl transition-all duration-75 overflow-hidden ${xpWindowBg} border-[3px] border-[#0058EE]
            ${id === 'about' ? 'top-10 left-10 md:left-40 w-[90%] md:w-[600px]' : ''}
            ${id === 'projects' ? 'top-20 left-10 md:left-60 w-[90%] md:w-[700px]' : ''}
            ${id === 'skills' ? 'top-40 left-10 md:left-80 w-[90%] md:w-[500px]' : ''}
            ${id === 'contact' ? 'top-60 left-10 md:left-96 w-[90%] md:w-[450px]' : ''}
            ${activeWindow === id ? 'z-30' : 'z-20 opacity-90'}
          `}
        >
          {/* XP Title Bar */}
          <div className={`${xpBlue} h-8 flex items-center justify-between px-2 cursor-default`}>
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              {desktopIcons.find(i => i.id === id)?.icon && (
                <div className="scale-50">{desktopIcons.find(i => i.id === id).icon}</div>
              )}
              <span className="drop-shadow-sm">{desktopIcons.find(i => i.id === id)?.name}</span>
            </div>
            <div className="flex space-x-1 py-1">
              <button className="bg-[#0058EE] border border-white/40 rounded-sm p-0.5 hover:brightness-110 shadow-inner"><Minus size={12} className="text-white" /></button>
              <button className="bg-[#0058EE] border border-white/40 rounded-sm p-0.5 hover:brightness-110 shadow-inner"><Maximize2 size={12} className="text-white" /></button>
              <button 
                onClick={(e) => { e.stopPropagation(); setOpenWindows(openWindows.filter(w => w !== id)); }}
                className="bg-[#E22F11] border border-white/40 rounded-sm p-0.5 hover:brightness-125 shadow-inner"
              >
                <X size={12} className="text-white" />
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-4 overflow-y-auto max-h-[70vh] bg-[#F1F1E3] border-t border-white">
            {id === 'about' && (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-white border p-1 border-gray-400 shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Rex" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blue-900 mb-2 underline">User Profile: Rex Ravita</h1>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Full-stack Engineer located in the Philippines. Currently optimizing systems and building clean interfaces since 2019. 
                  </p>
                  <div className="bg-white border border-gray-300 p-3 rounded">
                    <p className="text-xs font-bold text-blue-800 uppercase mb-2 border-b">Computer Info</p>
                    <p className="text-xs text-gray-600">Processor: Creative Thinking 3.5GHz</p>
                    <p className="text-xs text-gray-600">RAM: 32GB Persistence</p>
                    <p className="text-xs text-gray-600">OS: RavitaOS v1.0.4</p>
                  </div>
                </div>
              </div>
            )}

            {id === 'projects' && (
              <div className="space-y-4">
                <p className="text-sm italic text-gray-600 mb-4 font-bold border-b pb-1">Exploring C:/Users/Rex/Desktop/Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projects.map((p, i) => (
                    <div key={i} className="flex space-x-3 p-3 bg-white border border-gray-300 hover:border-blue-500 cursor-pointer group">
                      <Folder className="text-yellow-500 shrink-0" size={32} />
                      <div>
                        <p className="font-bold text-blue-800 group-hover:underline">{p.title}</p>
                        <p className="text-[10px] text-gray-500">{p.tech}</p>
                        <p className="text-xs text-gray-700 mt-1 line-clamp-1">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {id === 'skills' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-blue-800 border-b mb-2 flex items-center space-x-1">
                    <Terminal size={14} /> <span>Development</span>
                  </p>
                  <ul className="text-xs space-y-1">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'].map(s => <li key={s}>• {s}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-blue-800 border-b mb-2 flex items-center space-x-1">
                    <Layers size={14} /> <span>Tools</span>
                  </p>
                  <ul className="text-xs space-y-1">
                    {['Docker', 'AWS', 'PostgreSQL', 'Figma', 'Git'].map(s => <li key={s}>• {s}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {id === 'contact' && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 p-3 flex items-center space-x-3">
                  <Mail className="text-blue-600" />
                  <span className="text-sm font-bold text-blue-800">Send me an E-Mail?</span>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-gray-500">Subject</span>
                    <input className="border border-gray-400 p-1 text-sm bg-white" placeholder="Project Inquiry" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-gray-500">Body</span>
                    <textarea className="border border-gray-400 p-1 text-sm bg-white h-20" placeholder="Hello Rex..."></textarea>
                  </div>
                  <button className="bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-500 px-4 py-1 text-xs font-bold hover:brightness-105 active:shadow-inner">Send</button>
                </div>
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="bg-[#ECE9D8] border-t border-gray-300 px-2 py-1 flex items-center justify-between text-[10px] text-gray-600">
            <span>{id === 'about' ? '1 object selected' : 'Ready'}</span>
            <div className="flex items-center space-x-2 border-l border-gray-400 pl-2">
              <Monitor size={10} />
              <span>My Computer</span>
            </div>
          </div>
        </div>
      ))}

      {/* Taskbar */}
      <div className={`fixed bottom-0 w-full h-10 ${xpTaskbar} z-50 flex items-center px-0 shadow-[0_-2px_4px_rgba(0,0,0,0.3)]`}>
        {/* Start Button */}
        <button 
          onClick={() => setIsStartOpen(!isStartOpen)}
          className="h-full px-4 bg-gradient-to-b from-[#3A9F3A] via-[#247024] to-[#3A9F3A] rounded-r-2xl flex items-center space-x-2 border-r border-green-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] hover:brightness-110 active:brightness-90 group transition-all"
        >
          <div className="bg-white rounded-full p-0.5 group-hover:rotate-12 transition-transform">
             <div className="bg-green-500 rounded-full w-4 h-4" />
          </div>
          <span className="text-white italic font-black text-xl tracking-tighter drop-shadow-md">start</span>
        </button>

        {/* Taskbar Items */}
        <div className="flex-grow flex items-center px-2 space-x-1 h-full overflow-hidden">
          {openWindows.map(id => (
            <button 
              key={id}
              onClick={() => setActiveWindow(id)}
              className={`flex items-center space-x-2 h-[80%] px-3 rounded text-white text-xs border transition-colors max-w-[150px] truncate
                ${activeWindow === id ? 'bg-[#1e52bd] border-[#ffffff44] shadow-inner font-bold' : 'bg-[#3c81f3] border-transparent hover:bg-[#4a8dfa]'}
              `}
            >
              <div className="scale-75 shrink-0">{desktopIcons.find(i => i.id === id)?.icon}</div>
              <span className="truncate">{desktopIcons.find(i => i.id === id)?.name}</span>
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div className="h-full bg-[#0996F1] border-l border-blue-400 px-4 flex items-center space-x-3 text-white">
          <div className="flex space-x-1">
            <Settings size={14} className="opacity-80" />
            <Search size={14} className="opacity-80" />
          </div>
          <div className="text-xs font-medium">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Start Menu */}
      {isStartOpen && (
        <div className="fixed bottom-10 left-0 w-80 bg-white rounded-t-lg shadow-2xl z-50 overflow-hidden border-2 border-[#0058EE] animate-in slide-in-from-bottom-4 duration-200">
          <div className={`${xpBlue} p-4 flex items-center space-x-3`}>
             <div className="w-12 h-12 rounded border-2 border-white overflow-hidden bg-white">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Avatar" />
             </div>
             <span className="text-white font-bold text-lg drop-shadow-md">Rex Ravita</span>
          </div>
          <div className="flex h-80">
            <div className="w-3/5 p-2 bg-white flex flex-col space-y-1">
               {desktopIcons.map(icon => (
                 <button 
                   key={icon.id}
                   onClick={() => toggleWindow(icon.id)}
                   className="flex items-center space-x-3 p-2 hover:bg-[#3169c6] hover:text-white rounded group text-left"
                 >
                    <div className="scale-50">{icon.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold">{icon.name}</span>
                      <span className="text-[9px] text-gray-500 group-hover:text-white/80">Launch application</span>
                    </div>
                 </button>
               ))}
               <div className="mt-auto border-t p-2">
                 <button className="flex items-center space-x-2 text-xs font-bold text-gray-700 hover:text-blue-600">
                   <Folder size={16} className="text-yellow-500" />
                   <span>All Programs</span>
                 </button>
               </div>
            </div>
            <div className="w-2/5 bg-[#D3E5FA] border-l border-blue-200 p-2 flex flex-col space-y-3">
              <button className="flex items-center space-x-2 text-[11px] text-[#00156E] font-bold hover:underline">
                <FileText size={14} /> <span>My Documents</span>
              </button>
              <button className="flex items-center space-x-2 text-[11px] text-[#00156E] font-bold hover:underline">
                <Monitor size={14} /> <span>My Computer</span>
              </button>
              <div className="mt-auto pt-2 border-t border-blue-300">
                <button className="flex items-center space-x-2 text-[11px] text-[#00156E] font-bold hover:underline">
                   <Settings size={14} /> <span>Control Panel</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#3169c6] to-[#1e52bd] p-2 flex justify-end space-x-2">
             <button className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded text-white text-[10px] font-bold border border-orange-800">
               <X size={12} /> <span>Log Off</span>
             </button>
             <button className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-b from-red-500 to-red-700 rounded text-white text-[10px] font-bold border border-red-900">
               <Cpu size={12} /> <span>Turn Off</span>
             </button>
          </div>
        </div>
      )}

      {/* Boot Sound/Interaction Barrier (Optional hint) */}
      {!openWindows.length && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl text-white text-sm font-bold animate-pulse">
            Double-click an icon to start
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
