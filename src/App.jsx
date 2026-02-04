import { useState, useEffect } from 'react'

// Section Component
const Section = ({ id, title, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <section
      id={id}
      className={`py-16 px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 gradient-text">{title}</h2>
        {children}
      </div>
    </section>
  )
}

// Card Component
const Card = ({ children, className = '' }) => (
  <div className={`glass rounded-xl p-6 mb-4 hover:border-[#e94560]/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
)

// Skill Badge Component
const SkillBadge = ({ name }) => (
  <span className="inline-block px-3 py-1 text-sm bg-[#e94560]/20 text-[#e94560] rounded-full mr-2 mb-2 border border-[#e94560]/30">
    {name}
  </span>
)

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'competencies', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'approach', label: 'Approach' },
    { id: 'stack', label: 'Stack' },
    { id: 'direction', label: 'Direction' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold gradient-text">HW.Park</a>
        <div className="hidden md:flex gap-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-400 hover:text-[#e94560] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Hero Section
const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
    <div className="text-center max-w-3xl animate-fadeInUp">
      <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#e94560] to-[#ff6b6b] p-1 animate-glow">
        <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center">
          <span className="text-4xl font-bold gradient-text">HW</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        <span className="text-white">박해원</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-6">
        Backend Engineer · System Architect
      </p>
      <p className="text-lg text-gray-500 mb-8 leading-relaxed">
        서비스가 실제로 운영되는 환경을 전제로 설계하는 백엔드 엔지니어
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#about"
          className="px-6 py-3 bg-[#e94560] text-white rounded-lg hover:bg-[#ff6b6b] transition-all duration-300 hover:scale-105"
        >
          About Me
        </a>
        <a
          href="#experience"
          className="px-6 py-3 glass text-white rounded-lg hover:border-[#e94560] transition-all duration-300"
        >
          Experience
        </a>
      </div>
    </div>
  </section>
)

// About Section
const About = () => (
  <Section id="about" title="About Me" delay={100}>
    <Card>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        저는 단순히 기능을 구현하는 개발자가 아니라,
        <span className="text-[#e94560] font-semibold"> 서비스가 실제로 운영되는 환경을 전제로 설계하는 백엔드 엔지니어</span>입니다.
      </p>
      <p className="text-gray-400 mb-6">
        실서비스 <span className="text-[#ffa502] font-semibold">Fingoo</span>의 설계·개발·운영을 경험하며
        아래와 같은 문제들을 반복적으로 다뤄왔습니다.
      </p>
      <ul className="space-y-3 text-gray-400">
        {[
          '불완전한 요구사항',
          '빠른 MVP 개발과 구조 안정성의 균형',
          '운영 중 발생하는 예외 상황',
          '기능 확장에 따른 구조 복잡도 증가'
        ].map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span className="w-2 h-2 bg-[#e94560] rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 bg-[#0d0d14] rounded-lg border-l-4 border-[#e94560]">
        <p className="text-gray-300 italic">
          "이 포트폴리오는 제가 어떤 기술을 썼는지보다, 어떤 문제를 어떻게 바라보고 해결하는지를 보여주기 위한 문서입니다."
        </p>
      </div>
    </Card>
  </Section>
)

// Core Competencies Section
const Competencies = () => {
  const competencies = [
    {
      title: 'Backend Architecture',
      icon: '🏗️',
      items: [
        'NestJS 기반 API 서버 설계',
        '도메인 중심 모듈화',
        'Controller / Service / Repository 책임 분리',
        '확장을 고려한 구조 설계'
      ]
    },
    {
      title: 'Database & Data Flow',
      icon: '🗄️',
      items: [
        'PostgreSQL 기반 데이터 모델링',
        'TypeORM 엔티티 설계',
        '운영 데이터, 통계 데이터 분리 설계',
        '데이터 무결성 중심 설계'
      ]
    },
    {
      title: 'System & Operation',
      icon: '⚙️',
      items: [
        '로컬/서버 환경 차이를 고려한 설계',
        'Docker 기반 환경 통일',
        '에러 핸들링 및 로그 중심 디버깅',
        '운영 이후를 고려한 코드 구조'
      ]
    }
  ]

  return (
    <Section id="competencies" title="Core Competencies" delay={200}>
      <div className="grid md:grid-cols-3 gap-6">
        {competencies.map((comp, idx) => (
          <Card key={idx} className="hover:scale-105">
            <div className="text-4xl mb-4">{comp.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-4">{comp.title}</h3>
            <ul className="space-y-2">
              {comp.items.map((item, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start">
                  <span className="text-[#e94560] mr-2">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}

// Experience Section
const Experience = () => (
  <Section id="experience" title="Representative Project Experience" delay={300}>
    <Card>
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#e94560] to-[#ffa502] rounded-lg flex items-center justify-center mr-4">
          <span className="text-2xl">🚀</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Fingoo</h3>
          <p className="text-gray-400">실서비스 개발 및 운영</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-[#e94560] font-semibold mb-3">프로젝트 성격</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#ffa502] rounded-full mr-3"></span>
              실제 사용자 대상 서비스
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#ffa502] rounded-full mr-3"></span>
              단순 과제가 아닌 지속 운영 서비스
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#ffa502] rounded-full mr-3"></span>
              기능 추가와 구조 변경이 반복되는 환경
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#e94560] font-semibold mb-3">담당 역할</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#e94560] rounded-full mr-3"></span>
              백엔드 아키텍처 설계
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#e94560] rounded-full mr-3"></span>
              핵심 비즈니스 로직 구현
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#e94560] rounded-full mr-3"></span>
              데이터 구조 설계
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-[#e94560] rounded-full mr-3"></span>
              운영 이슈 대응
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </Section>
)

// Problem Solving Approach Section
const Approach = () => (
  <Section id="approach" title="Problem-Solving Approach" delay={400}>
    <Card>
      <h3 className="text-xl font-semibold text-white mb-4">문제 정의 방식</h3>
      <p className="text-gray-400 mb-4">
        제가 가장 중요하게 보는 것은 <span className="text-[#e94560] font-semibold">"지금 요구사항이 아니라, 다음 요구사항"</span>입니다.
      </p>
      <ul className="space-y-2 text-gray-400 mb-6">
        <li className="flex items-center">
          <span className="text-[#ffa502] mr-3">?</span>
          이 기능은 확장될 가능성이 있는가?
        </li>
        <li className="flex items-center">
          <span className="text-[#ffa502] mr-3">?</span>
          데이터 구조는 변경될 수 있는가?
        </li>
        <li className="flex items-center">
          <span className="text-[#ffa502] mr-3">?</span>
          운영 중 어떤 에러가 발생할 수 있는가?
        </li>
      </ul>
      <p className="text-gray-300">이 질문을 기준으로 설계를 시작합니다.</p>
    </Card>

    <Card className="mt-6">
      <h3 className="text-xl font-semibold text-white mb-4">설계 원칙</h3>
      <div className="code-block p-4 text-sm overflow-x-auto mb-4">
        <pre className="text-gray-300">
{`Client
  ↓
Controller  →  요청 검증 / 응답 포맷
  ↓
Service     →  비즈니스 규칙
  ↓
Repository  →  데이터 접근
  ↓
Database`}
        </pre>
      </div>
      <ul className="space-y-2 text-gray-400">
        <li className="flex items-start">
          <span className="text-[#e94560] mr-2">▹</span>
          비즈니스 로직은 Service에 집중
        </li>
        <li className="flex items-start">
          <span className="text-[#e94560] mr-2">▹</span>
          Controller는 최대한 얇게 유지
        </li>
        <li className="flex items-start">
          <span className="text-[#e94560] mr-2">▹</span>
          데이터 접근 로직 분리
        </li>
      </ul>
      <p className="text-gray-500 mt-4 text-sm italic">
        이는 Fingoo 실서비스에서 검증된 구조이며, 규모에 따라 단순화·확장이 모두 가능합니다.
      </p>
    </Card>
  </Section>
)

// Technology Stack Section
const TechStack = () => {
  const stacks = {
    Backend: ['NestJS', 'TypeScript'],
    Database: ['PostgreSQL', 'TypeORM'],
    Infra: ['Docker', 'AWS EC2'],
    Auth: ['JWT'],
    'Version Control': ['GitHub']
  }

  const principles = [
    { text: '"유행"보다 운영 안정성', icon: '🛡️' },
    { text: '"복잡함"보다 명확한 책임 분리', icon: '📦' },
    { text: '"빠른 구현"보다 지속 가능한 구조', icon: '🌱' }
  ]

  return (
    <Section id="stack" title="Technology Stack" delay={500}>
      <Card>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(stacks).map(([category, items]) => (
            <div key={category} className="p-4 bg-[#0d0d14] rounded-lg">
              <h4 className="text-[#e94560] font-semibold mb-2">{category}</h4>
              <div>
                {items.map(item => (
                  <SkillBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-lg font-semibold text-white mb-4">기술 선택 기준</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {principles.map((p, idx) => (
            <div key={idx} className="flex items-center p-3 bg-[#0d0d14] rounded-lg">
              <span className="text-2xl mr-3">{p.icon}</span>
              <span className="text-gray-300 text-sm">{p.text}</span>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}

// Decision & Trade-offs Section
const Decisions = () => (
  <Section id="decisions" title="Decision & Trade-offs" delay={550}>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">
          <span className="text-[#e94560]">사례 1.</span> 빠른 개발 vs 구조
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start">
            <span className="text-[#ffa502] mr-2">→</span>
            단기적으로는 코드량이 늘어남
          </li>
          <li className="flex items-start">
            <span className="text-[#ffa502] mr-2">→</span>
            장기적으로는 수정 비용 감소
          </li>
          <li className="flex items-start">
            <span className="text-[#e94560] mr-2">✓</span>
            실제 운영 단계에서 이점이 분명히 드러남
          </li>
        </ul>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">
          <span className="text-[#e94560]">사례 2.</span> 단순 구현 vs 추상화
        </h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start">
            <span className="text-[#ffa502] mr-2">→</span>
            과도한 추상화는 지양
          </li>
          <li className="flex items-start">
            <span className="text-[#ffa502] mr-2">→</span>
            변경 가능성이 높은 영역만 분리
          </li>
          <li className="flex items-start">
            <span className="text-[#e94560] mr-2">✓</span>
            실서비스 기준으로 판단
          </li>
        </ul>
      </Card>
    </div>
  </Section>
)

// Learnings Section
const Learnings = () => {
  const learnings = [
    {
      main: '구조는 속도를 늦추지 않는다',
      sub: '속도를 유지하게 만든다'
    },
    {
      main: '요구사항은 반드시 변한다',
      sub: '변화를 전제로 설계해야 한다'
    },
    {
      main: '운영 경험 없는 설계는 한계가 있다',
      sub: null
    }
  ]

  return (
    <Section id="learnings" title="Learnings" delay={600}>
      <Card>
        <div className="space-y-4">
          {learnings.map((l, idx) => (
            <div key={idx} className="p-4 bg-[#0d0d14] rounded-lg border-l-4 border-[#e94560]">
              <p className="text-white font-medium">{l.main}</p>
              {l.sub && (
                <p className="text-[#ffa502] mt-1">→ {l.sub}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-6 text-sm italic">
          이러한 관점은 실제 서비스를 운영하며 체득한 경험에서 비롯되었습니다.
        </p>
      </Card>
    </Section>
  )
}

// Direction Section
const Direction = () => (
  <Section id="direction" title="Direction" delay={700}>
    <Card>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">What I Can Do Next</h3>
        <ul className="space-y-2 text-gray-400">
          {[
            '서비스 규모에 맞는 백엔드 구조 설계',
            'MVP부터 운영 단계까지 이어지는 설계',
            '복잡한 비즈니스 로직 정리',
            '기존 코드베이스 구조 개선'
          ].map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className="w-2 h-2 bg-[#e94560] rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 bg-gradient-to-r from-[#e94560]/20 to-[#ffa502]/20 rounded-lg">
        <h4 className="text-white font-semibold mb-2">현재 & 장기 방향</h4>
        <p className="text-gray-400 mb-3">
          현재는 <span className="text-[#e94560]">Backend / System / Architecture</span> 중심의 엔지니어링 역량을 강화하고 있으며,
        </p>
        <p className="text-gray-300 mb-2">장기적으로는</p>
        <ul className="space-y-1 text-gray-400">
          <li className="flex items-center">
            <span className="text-[#ffa502] mr-2">▹</span>
            대규모 시스템 설계
          </li>
          <li className="flex items-center">
            <span className="text-[#ffa502] mr-2">▹</span>
            AI 시스템과 서비스 인프라의 결합
          </li>
          <li className="flex items-center">
            <span className="text-[#ffa502] mr-2">▹</span>
            운영 자동화 및 안정성
          </li>
        </ul>
        <p className="text-gray-400 mt-2">쪽으로 확장하고자 합니다.</p>
      </div>
    </Card>
  </Section>
)

// Footer Component
const Footer = () => (
  <footer className="py-8 px-4 border-t border-white/10">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-500">
        © 2024 박해원. Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
)

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Competencies />
      <Experience />
      <Approach />
      <TechStack />
      <Decisions />
      <Learnings />
      <Direction />
      <Footer />
    </div>
  )
}

export default App
