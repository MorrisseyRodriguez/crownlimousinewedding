import './Problem.css'
import distractedBride from '../Images/distractedbride.png'

export default function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="container problem-inner">
        <div className="problem-text">
          <div className="problem-heading-group">
            <p className="section-label">We Understand</p>
            <div className="divider" />
            <h2 id="problem-heading" className="section-title reveal">
              We Understand What's At Stake
            </h2>
          </div>
          <p className="problem-lead reveal reveal-delay-1">
            You've thought about what happens if the vehicle arrives late.<br />
            You've wondered whether the chauffeur will be professional.
          </p>
          <div className="problem-conclusion reveal reveal-delay-2">
            <p>
              You've planned every detail of your wedding day carefully.
            </p>
            <p>
              Transportation is one of the few things that feels completely out of your hands once the day begins.
            </p>
            <p>
              We understand.
            </p>
            <p>
              For over 30 years we've helped brides, wedding planners, and coordinators navigate exactly these concerns throughout Los Angeles and Southern California.
            </p>
          </div>
        </div>

        <div className="problem-image-wrap reveal reveal-delay-1">
          <img src={distractedBride} alt="Distracted bride" className="problem-image" loading="lazy" />
          <div className="problem-image-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
