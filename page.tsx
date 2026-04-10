import { Linkedin, Mail, GraduationCap, Award, Shield } from "lucide-react";

const team = [

{
  name: "Dr Nurain Hassan Ibrahim",
  role: "FOUNDER & MANAGING PARTNER",
  bio: "Dr Nurain is our founder and Managing Partner with over two decades experience in the private and public sectors and UK academia. His areas of expertise include strategic planning & organisational transformation; management research/consulting; information and knowledge management; policy design and review; technology innovation; digital coordination in major projects; and project management. Dr. Ibrahim has led the successful implementation of organisational transformation strategy and the development of robust corporate planning strategies and activities to meet organisational goals and objectives. He has extensive insights into the workings of the Nigerian Electricity Supply Industry (NESI) having held high level policy and executive leadership positions in the sector.\n\nHe has done doctoral and post-doctoral research at the universities of Leeds and Reading on information management practices. This work focused on emergency response and HSEQ management in the energy sector in Europe and Africa, and leading major research projects investigating digital practices in major infrastructure projects, working closely with public and private sector collaborators on the London 2012 Olympics and the £300 million upgrade of a major underground station in central London. He has a PhD in Management from the Leeds University Business School.",
  credentials: ["PhD", "MSc"]
},
{
  name: "Prof. Abdullahi Ahmed",
  role: "Core Team Leader",
  bio: "Professor Ahmed Abdullahi is an esteemed UK Chartered Engineer and a leading figure in Sustainable Engineering. With background spanning over two decades, he holds a Bachelor's degree in Building, a Master's Degree in Engineering Asset Management, and a PhD in Energy Systems Modelling. Demonstrating adeptness in innovative problem-solving, Professor Ahmed has successfully overseen numerous projects in renewable energy, building energy efficiency, circular economy, and sustainable buildings. His expertise also encompasses Health, Safety, and Environmental Management, as well as Asset Optimization through digital technologies. Proficient in areas such as digital engineering, energy engineering, building information modelling and energy and environmental management policy, Professor Ahmed brings a holistic approach to his work.\n\nIn addition to his noteworthy professional achievements, Professor Ahmed is renowned for his exceptional leadership skills. He has effectively guided teams through complex projects, ensuring the delivery of impactful outcomes. His leadership was notably showcased as the coordinator of large scale multi-disciplinary and multi-partner engineering projects.\n\nBeyond his professional expertise, Professor Ahmed is an esteemed educator, known for delivering high-impact training sessions both nationally and internationally. His reputation as a sought-after keynote speaker at prestigious conferences and workshops underscores his influential presence in academia and industry alike. Professor Ahmed's blend of academic prowess, leadership acumen, and professional expertise positions him as a transformative force in the fields of Engineering, Built Environment, and beyond.",
  credentials: ["PhD", "MSc", "CEng", "MIET"]
},
{
  name: "Mr. Hassan M. Isah",
  role: "Chief Business Development Adviser",
  bio: "Hassan is our Chief Business Development Adviser and leads our Nigerian operations. He is also Principal Partner, CEO Primeguage Solutions Ltd, an innovative technology management consultancy with competencies in strategy formulation, revenue generation and optimisation, infrastructural development, policy reform and advisory services. Hassan is also Director/Co- Founder DevGrid Solutions Ltd, one of Nigeria's leading Technology Development firms with over 50 Young Enterprising Developers (YEDs) on over 30 projects.\n\nHassan's expertise spans public sector business development and advisory services with key MDAs of the Nigerian Federal and State governments, including the Office of the Secretary to the Government of the Federation (SGF), 7 State Governments, the Federal Ministry of Finance (FMoF), and Revenue Mobilisation Allocation and Fiscal Responsibility Commission (RMFAC), among several others. A strategist and seasoned presenter/speaker in different high-profile government and NGO think tanks, forums and policy advisory groups including the National Digital Transformation Confab, 11th Bola Tinubu Colloquium, MIT-Reap Abuja Advisory Board among others. Hassan A certified Project Manager, Hassan has successfully secured and managed 3 distinct Concessions from the Infrastructure Regulatory Concession Commission (ICRC) In line with the national policy on public private partnership. He holds a BSc in International Business from American University of Dubai, is a Member, Chartered Institute of Project Managers of Nigeria (CIPM), and Member, Toastmasters International.",
  credentials: ["BSc", "CIPM", "PMP"]
},
{
  name: "Dr Aliyu Ahmad",
  role: "IT Professional & Azure Specialist",
  bio: "Aliyu is a highly experienced and competent IT professional. He holds a first class Bachelor's degree in Software Engineering from University of East London and a Master's with distinction in Software Development from Coventry University. His experience includes a software engineering role with British Telecoms (BT), notably as part of the 999 team that maintains the UK's emergency services platform. He also has a PhD in Engineering (Computing) from the University of Aberdeen.\n\nExpanding his expertise into the realms of Cloud Computing, Big Data Analytics and Artificial Intelligence (AI), Aliyu has become a recognized Microsoft Azure specialist in these areas. His proficiency in leveraging big data to derive actionable insights and his ability to apply AI in solving complex problems are testaments to his deep understanding of these technologies. Aliyu's skills extend to the practical application of these technologies in various domains, enhancing operational efficiencies and driving innovation.\n\nBeyond his professional and academic accomplishments, Aliyu is a volunteer for the Barefoot Computing Project, a tech literacy programme aimed at helping the UK become more tech literate. The initiative is designed to provide primary school teachers with the confidence and resources they need to deliver the new computing curriculum in a simple way. Aliyu has delivered barefoot workshops to school teachers, including at Morley Newlands Academy, Leeds.",
  credentials: ["PhD", "MSc", "Azure Certified"]
},
{
  name: "Muhammad M Abubakar",
  role: "Project Manager & IT Professional",
  bio: "Muhammad M Abubakar is a versatile project manager and IT professional with expertise in enterprise systems deployment, IT infrastructure management, and strategic project execution. He holds a BSc in Computer Science and two advanced degrees: an MSc in Information Technology and Systems, specializing in Network Technology and Security Systems, and an MSc in International Affairs and Diplomacy, with a focus on Defence and Security Studies. All his academic achievements are from the prestigious Ahmadu Bello University, Zaria.\n\nMuhammad has contributed to high-impact projects with organizations such as ECOWAS and Primeguage Solutions Limited. His notable accomplishments include Involvement in the Enterprise Content Management (ECM) project for ECOWAS and overseeing the successful rollout of the PayZamfara Portal for Zamfara State`s Internal Revenue Service. With a strong foundation in systems optimization and stakeholder collaboration, Muhammad delivers innovative IT solutions that align with organizational goals.\n\nHe holds professional certifications in Project Management, Customer Service, Relationship Management, General Health, Safety & Environment (HSE), and Human Resource Management. He is also an Associate member of the Nigerian Computer Society.\n\nDedicated to fostering efficiency and innovation, Muhammad combines his technical expertise, project management acumen, and strategic insight to drive organizational success and deliver measurable value.",
  credentials: ["MSc", "BSc", "NCS"]
}];


export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#123057] pt-12 pb-24 md:pt-16 md:pb-32 text-white">
        <div className="corporate-container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
              Core Leadership & <br />
              <span className="text-[#E1702C]">Technical Authority.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
              Our multidisciplinary core team bridges world-class academic expertise with 
              extensive practical experience in global energy, infrastructure, and management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="corporate-container">
          <div className="space-y-32">
            {team.map((member, index) =>
            <div
              key={member.name}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}>

                <div className="w-full lg:w-1/3 sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#123057] uppercase tracking-tighter mb-4 leading-none">
                    {member.name}
                  </h2>
                  <div className="h-1 w-12 bg-[#E1702C] mb-6" />
                  <p className="text-[#E1702C] font-bold text-sm uppercase tracking-[0.2em] mb-8 !whitespace-pre-line">
                    {member.role}
                  </p>
                  <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-[#123057] transition-colors p-2 border border-gray-100">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#123057] transition-colors p-2 border border-gray-100">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light space-y-6">
                    {member.bio.split('\n\n').map((paragraph, i) =>
                  <p key={i}>{paragraph}</p>
                  )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="corporate-container text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#123057] uppercase tracking-tight mb-12">
              Our Advisory Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
              { title: "Academic Excellence", icon: GraduationCap, text: "Leveraging rigorous research frameworks from leading UK universities to solve real-world industrial challenges." },
              { title: "Strategic Oversight", icon: Award, text: "Decades of experience in policy design, organisational transformation, and large-scale project coordination." },
              { title: "Technical Integrity", icon: Shield, text: "A commitment to health, safety, and environmental excellence underpinned by digital innovation." }].
              map((item) =>
              <div key={item.title} className="p-8 bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-[#E1702C] mb-6"><item.icon size={40} strokeWidth={1} /></div>
                  <h4 className="font-bold text-[#123057] uppercase tracking-widest text-base mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

}