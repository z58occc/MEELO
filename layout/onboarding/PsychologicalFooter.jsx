export default function RatingFooter({ prev, next, disabled }) {
  return (
    <div className="z-3 w-100 page-scoll-mask-b">
      <div className="bg-body d-flex justify-content-between pt-4t px-6t">
        <a
          className="d-flex btn-ghost btn-ghost-neutral"
          href={prev}
          data-action="prev"
          onClick={(e) => e.preventDefault()}
        >
          <i className="icon-mask icon-arrow-left me-3t"></i>上一步
        </a>
        <a
          className={`d-flex btn-ghost btn-ghost-accent  ${
            disabled ? "" : "disabled"
          }`}
          href={next}
          data-action="next"
          onClick={(e) => e.preventDefault()}
        >
          <span
            className={`dynamic-name ${
              next === "character-creating" && "switch-name"
            }`}
          >
            <span className="dynamic-first">下一步</span>
            <span className="dynamic-sec">查看結果</span>
          </span>
          <i className="icon-mask icon-arrow-right ms-3t"></i>
        </a>
      </div>
    </div>
  );
}
