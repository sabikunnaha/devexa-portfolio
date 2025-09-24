import { FileText } from 'lucide-react';

const About = () => {
    
    return (
       <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        {/* Large diagonal gradient overlay */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-teal-500/20 via-blue-400/10 to-transparent transform skew-x-12 translate-x-32"></div>
        
        {/* Hexagonal pattern overlay */}
        <div className="absolute top-20 right-20 w-96 h-96 opacity-10">
          <div className="grid grid-cols-8 gap-1 transform rotate-12">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-teal-400 transform rotate-45"></div>
            ))}
          </div>
        </div>
        
        {/* Additional decorative dots */}
        <div className="absolute bottom-40 right-32 w-2 h-2 bg-teal-500 rounded-full"></div>
        <div className="absolute bottom-56 right-48 w-1 h-1 bg-teal-400 rounded-full"></div>
        <div className="absolute bottom-72 right-40 w-3 h-3 bg-teal-300 rounded-full opacity-60"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left content section */}
        <div className="w-1/2 px-12 py-16 flex flex-col justify-center">
          <div className="max-w-lg">
            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide">
              INTRODUCTION
            </h1>
            
            {/* Main heading */}
            <h2 className="text-4xl font-light text-teal-600 mb-12 leading-tight">
              COMPANY THAT HAVE<br />
              A BIG VISION.
            </h2>
            
            {/* First paragraph */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem adipiscing about ultra dictum quam dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
            </p>
            
            {/* Second paragraph */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Quisque dignissim aliquam aliquam Storefronts quam ullamcorper volutpat porttitor amet tortor nibh porta. Viverra rutrum elit elit ipsum facilisis eleifend eleifend congue habitant aliquet faucibus ipsum mus ante consectetur.
            </p>
            
            {/* Third paragraph */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem adipiscing about ultra dictum quam ullamcorper volutpat porttitor nibh porta viverra rutrum elit ipsum facilisis eleifend eleifend rutrum elit lorem congue. Quisque consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna quam ullamcorper volutpat porta hendrerit urna placerat eget euismod quam ullamcorper eleifend congue habitant quis pede massa ex vitae ullamque.
            </p>
          </div>
        </div>

        {/* Right image section */}
        <div className="w-1/2 relative">
          {/* Professional woman image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400">
            {/* Simulated professional photo */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 relative">
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-800/20 to-transparent"></div>
              
              {/* Simulated person silhouette */}
              <div className="absolute bottom-0 right-1/4 w-48 h-96 bg-gradient-to-t from-gray-700/40 via-gray-600/30 to-transparent rounded-t-full"></div>
              
              {/* Professional elements overlay */}
              <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"></div>
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
          
          {/* Geometric overlay elements */}
          <div className="absolute bottom-20 left-20 z-20">
            {/* Hexagonal icon container */}
            <div className="relative">
              <div className="w-20 h-20 bg-teal-600 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="transform -rotate-45">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Small decorative elements around the icon */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-teal-300 transform rotate-45"></div>
              <div className="absolute top-1/2 -left-6 w-2 h-2 bg-teal-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Additional geometric accents */}
          <div className="absolute top-1/3 right-10 w-12 h-12 border-2 border-teal-400/50 transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-teal-300/60 transform rotate-12"></div>
        </div>
      </div>
      
      {/* Bottom geometric accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-l from-teal-500/20 to-transparent"></div>
    </div>
    );
};

export default About;