import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/result/AnalysisCard'
import MeasurementTable from '../components/result/MeasurementTable'
import ResultHeader from '../components/result/ResultHeader'
import ScoreCard from '../components/result/ScoreCard'
import SuggestionList from '../components/result/SuggestionList'
import RevealAnimation from '../components/ui/RevealAnimation'

// This page organizes the report sections and keeps the UI ready for real backend data.
function Result() {
  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state || {}

  // A small formatter keeps the UI consistent whether the backend sends numbers or strings.
  const formatMetricValue = (value) => {
    if (value === null || value === undefined || value === '') {
      return null
    }

    if (typeof value === 'number') {
      return `${value}/100`
    }

    return String(value)
  }

  const summaryOverall = formatMetricValue(data.overall_score)
const summaryFaceShape = formatMetricValue(data.face_shape)
const summarySymmetry = formatMetricValue(data.scores?.symmetry)
const summaryConfidence = formatMetricValue(data.confidence)

const strengths = data.strengths || []
const suggestions = data.improvements || []
const measurements = Object.entries(data.measurements || {}).map(
  ([label, value]) => ({
    label,
    value,
  })
)

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_55%,_#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        {/* The header contains the page title and the action to start a new analysis. */}
        <ResultHeader onAnalyzeAgain={() => navigate('/upload')} />

        {/* The overview cards give a polished snapshot for the four most important metrics. */}
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Overall Score',
              value: summaryOverall,
              description: 'The final score from the backend will appear here once the analysis completes.',
            },
            {
              title: 'Face Shape',
              value: summaryFaceShape,
              description: 'The detected face shape will be rendered here as soon as the API returns it.',
            },
            {
              title: 'Facial Symmetry',
              value: summarySymmetry,
              description: 'A symmetry summary will appear here when the backend finishes processing.',
            },
            {
              title: 'Confidence Score',
              value: summaryConfidence,
              description: 'The confidence score will be displayed once the backend delivers it.',
            },
          ].map((item, index) => (
            <RevealAnimation key={item.title} delay={index * 0.06}>
              <ScoreCard title={item.title} value={item.value} description={item.description} />
            </RevealAnimation>
          ))}
        </section>

        {/* The detail area expands the overview into structured sections for deeper reporting. */}
        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <RevealAnimation delay={0.12}>
              <AnalysisCard
                title="Overall Score"
                value={summaryOverall ? `Overall score: ${summaryOverall}` : null}
                placeholder="The backend will send the final score once analysis is complete."
              />
            </RevealAnimation>
            <RevealAnimation delay={0.16}>
              <AnalysisCard
                title="Face Shape"
                value={summaryFaceShape ? `Face shape: ${summaryFaceShape}` : null}
                placeholder="The detected facial outline will appear here after processing."
              />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <AnalysisCard
                title="Symmetry"
                value={summarySymmetry ? `Symmetry: ${summarySymmetry}` : null}
                placeholder="Symmetry insights will be shown as soon as the backend returns them."
              />
            </RevealAnimation>
            <RevealAnimation delay={0.24}>
              <AnalysisCard
                title="Confidence"
                value={summaryConfidence ? `Confidence: ${summaryConfidence}` : null}
                placeholder="Confidence details will be added once the model produces a result."
              />
            </RevealAnimation>
          </div>

          <div className="space-y-6">
            {/* The measurement table holds structured values in a professional layout. */}
            <RevealAnimation delay={0.12}>
              <MeasurementTable measurements={measurements} />
            </RevealAnimation>

            {/* Strengths and suggestions are kept separate so the page remains easy to extend. */}
            <RevealAnimation delay={0.16}>
              <SuggestionList title="Strengths" items={strengths} emptyMessage="Strengths will be listed here after the backend analysis is available." />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <SuggestionList title="Suggestions" items={suggestions} emptyMessage="Suggestions will appear here once the system returns improvement notes." />
            </RevealAnimation>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Result
