import ProgressBar from '../components/ProgressBar.jsx'
import AppIcon from '../components/AppIcon.jsx'
import { getActivity } from '../data/course.js'
import { getAdaptiveRecommendation, getReviewDue } from '../utils/learningEngine.js'

export default function HomePage({ progress, totalPercent, onNavigate, onContinue, onActivity, onReview }) {
  const reviewDue = getReviewDue(progress)
  const recommendation = getAdaptiveRecommendation(progress, getActivity)
  const level = progress.placement?.recommendedLevel === 'developer' ? 'Developer' : progress.placement?.recommendedLevel === 'creador' ? 'Creador' : 'Explorador'
  const nextLabel = reviewDue ? `Revisión de vuelo · ${reviewDue} misiones` : (recommendation.activityId ? recommendation.title : 'Continúa tu ruta')

  return <main className="home-screen home-screen-v25">
    <section className="aerolab-hero aerolab-hero-v25">
      <div className="hero-photo" aria-hidden="true" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero/anime-python.jpg)` }} />
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-copy-pro">
        <p className="eyebrow">PEQUEÑOS EXPLORADORES · GRANDES IDEAS</p>
        <h1>Aprende <span>Python</span><br/>paso a paso</h1>
        <p className="hero-lead-pro">Una plataforma interactiva de aprendizaje de programación para alumnos de Aerolab Center. Empieza con los fundamentos y avanza hasta construir programas reales.</p>
        <div className="hero-actions-pro">
          <button className="btn hero-primary" onClick={onContinue}><AppIcon name="rocket" size={20}/> Comenzar aventura <b>→</b></button>
          <button className="btn hero-secondary" onClick={() => onNavigate('route')}><AppIcon name="map" size={20}/> Ver ruta</button>
        </div>
      </div>

      <aside className="progress-card-pro">
        <div className="progress-card-title"><h2>Tu progreso</h2></div>
        <div className="current-level-card">
          <span className="level-badge-pro"><AppIcon name="star" size={22}/></span>
          <div><small>Nivel actual</small><b>{level}</b></div>
          <span className="level-number">Nivel {Math.max(1, Math.floor(progress.xp / 250) + 1)}</span>
        </div>
        <ProgressBar value={totalPercent} label="Ruta completada" />
        <div className="progress-stat-pro"><span><AppIcon name="bolt" size={20}/></span><b>{progress.xp}</b><small>XP</small></div>
        <div className="progress-stat-pro"><span><AppIcon name="star" size={20}/></span><b>{progress.stars}</b><small>Estrellas</small></div>
        <div className="progress-stat-pro"><span><AppIcon name="flag" size={20}/></span><b>{progress.completedLessons.length}</b><small>Misiones</small></div>

        <div className="next-mission-pro">
          <small>PRÓXIMA MISIÓN</small>
          <b>{nextLabel}</b>
          {reviewDue ? <button onClick={() => onReview(reviewDue)}>Continuar →</button> : recommendation.activityId ? <button onClick={() => onActivity(recommendation.activityId)}>Continuar →</button> : <button onClick={onContinue}>Continuar →</button>}
        </div>
      </aside>
    </section>
  </main>
}
