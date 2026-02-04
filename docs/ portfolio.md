# Backend & System Engineering Portfolio  
박해원 | Backend Engineer · System Architect

---

## 1. About Me

저는 단순히 기능을 구현하는 개발자가 아니라,  
**서비스가 실제로 운영되는 환경을 전제로 설계하는 백엔드 엔지니어**입니다.

실서비스 **Fingoo**의 설계·개발·운영을 경험하며  
아래와 같은 문제들을 반복적으로 다뤄왔습니다.

- 불완전한 요구사항
- 빠른 MVP 개발과 구조 안정성의 균형
- 운영 중 발생하는 예외 상황
- 기능 확장에 따른 구조 복잡도 증가

이 포트폴리오는  
제가 어떤 **기술을 썼는지**보다  
어떤 **문제를 어떻게 바라보고 해결하는지**를 보여주기 위한 문서입니다.

---

## 2. Core Competencies

### Backend Architecture
- NestJS 기반 API 서버 설계
- 도메인 중심 모듈화
- Controller / Service / Repository 책임 분리
- 확장을 고려한 구조 설계

### Database & Data Flow
- PostgreSQL 기반 데이터 모델링
- TypeORM 엔티티 설계
- 운영 데이터, 통계 데이터 분리 설계
- 데이터 무결성 중심 설계

### System & Operation Mindset
- 로컬/서버 환경 차이를 고려한 설계
- Docker 기반 환경 통일
- 에러 핸들링 및 로그 중심 디버깅
- 운영 이후를 고려한 코드 구조

---

## 3. Representative Project Experience  
### (Service-Level Development Experience)

### 프로젝트 성격
- 실제 사용자 대상 서비스
- 단순 과제가 아닌 지속 운영 서비스
- 기능 추가와 구조 변경이 반복되는 환경

### 담당 역할
- 백엔드 아키텍처 설계
- 핵심 비즈니스 로직 구현
- 데이터 구조 설계
- 운영 이슈 대응

---

## 4. Problem-Solving Approach

### 문제 정의 방식

제가 가장 중요하게 보는 것은  
**“지금 요구사항이 아니라, 다음 요구사항”**입니다.

- 이 기능은 확장될 가능성이 있는가?
- 데이터 구조는 변경될 수 있는가?
- 운영 중 어떤 에러가 발생할 수 있는가?

이 질문을 기준으로 설계를 시작합니다.

---

### 설계 원칙

```markdown
Client
  ↓
Controller  →  요청 검증 / 응답 포맷
  ↓
Service     →  비즈니스 규칙
  ↓
Repository  →  데이터 접근
  ↓
Database

```

비즈니스 로직은 Service에 집중

Controller는 최대한 얇게 유지

데이터 접근 로직 분리

이는 Fingoo 실서비스에서 검증된 구조이며,
규모에 따라 단순화·확장이 모두 가능합니다.

##5. Technology Stack
Backend: NestJS (TypeScript)

Database: PostgreSQL

ORM: TypeORM

Infra: Docker, AWS EC2

Auth: JWT

Version Control: GitHub

기술 선택 기준
“유행”보다 운영 안정성

“복잡함”보다 명확한 책임 분리

“빠른 구현”보다 지속 가능한 구조

6. Decision & Trade-offs
사례 1. 빠른 개발 vs 구조
단기적으로는 코드량이 늘어남

장기적으로는 수정 비용 감소

실제 운영 단계에서 이점이 분명히 드러남

사례 2. 단순 구현 vs 추상화
과도한 추상화는 지양

변경 가능성이 높은 영역만 분리

실서비스 기준으로 판단

7. Learnings
구조는 속도를 늦추지 않는다
→ 속도를 유지하게 만든다

요구사항은 반드시 변한다
→ 변화를 전제로 설계해야 한다

운영 경험 없는 설계는 한계가 있다

이러한 관점은
실제 서비스를 운영하며 체득한 경험에서 비롯되었습니다.

8. What I Can Do Next
서비스 규모에 맞는 백엔드 구조 설계

MVP부터 운영 단계까지 이어지는 설계

복잡한 비즈니스 로직 정리

기존 코드베이스 구조 개선

9. Direction
현재는
Backend / System / Architecture 중심의 엔지니어링 역량을 강화하고 있으며,

장기적으로는

대규모 시스템 설계

AI 시스템과 서비스 인프라의 결합

운영 자동화 및 안정성

쪽으로 확장하고자 합니다.