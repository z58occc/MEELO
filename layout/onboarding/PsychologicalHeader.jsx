export default function Rating({ progress }) {
  return (
    <div className="rating">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-label="onboarding-progress"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div className="bg-primary-default rounded-circle ms-n3t">
          <i className="icon icon-sm icon-paw m-1"></i>
        </div>
      </div>
    </div>
  );
}
