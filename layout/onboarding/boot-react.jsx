import React from "react";
import { createRoot } from "react-dom/client";
import { createPortal } from "react-dom";
import Rating from "./PsychologicalHeader";
import RatingFooter from "./PsychologicalFooter";
// import GenderForm from "../widgets/GenderForm";

// 掛載進度條
const ratingEl = document.getElementById("rating-root");
const ratingFooterEl = document.getElementById("rating-footer");

// 小工具：把 "true"/"false"/undefined 轉成 boolean
const toBool = (v) => String(v).toLowerCase() === "true";

if (ratingEl && ratingFooterEl) {
  const root = createRoot(ratingEl);

  function App() {
    const [progress, setProgress] = React.useState(
      Number(ratingEl.dataset.progress || 0)
    );

    const [footerState, setFooterState] = React.useState(() => ({
      prev: ratingFooterEl?.dataset.pre || "",
      next: ratingFooterEl?.dataset.next || "",
      disabled: toBool(ratingFooterEl?.dataset.isDisable),
    }));

    React.useEffect(() => {
      const update = () => setProgress(Number(ratingEl.dataset.progress || 0));
      // 初始同步一次
      update();

      const mo = new MutationObserver((mutations) => {
        if (
          mutations.some(
            (m) =>
              m.type === "attributes" && m.attributeName === "data-progress"
          )
        ) {
          update();
        }
      });
      mo.observe(ratingEl, {
        attributes: true,
        attributeFilter: ["data-progress"],
      });

      return () => mo.disconnect();
    }, []);

    // 監聽 footer 的 data 屬性變化
    React.useEffect(() => {
      if (!ratingFooterEl) return;

      const readFooter = () =>
        setFooterState({
          prev: ratingFooterEl.dataset.pre || "",
          next: ratingFooterEl.dataset.next || "",
          disabled: toBool(ratingFooterEl.dataset.isDisable),
        });

      // 初始同步一次
      readFooter();

      const mo = new MutationObserver((muts) => {
        if (
          muts.some(
            (m) =>
              m.type === "attributes" &&
              (m.attributeName === "data-pre" ||
                m.attributeName === "data-next" ||
                m.attributeName === "data-is-disable")
          )
        ) {
          readFooter();
        }
      });

      mo.observe(ratingFooterEl, {
        attributes: true,
        attributeFilter: ["data-pre", "data-next", "data-is-disable"],
      });

      return () => mo.disconnect();
    }, []);

    return (
      <>
        {/* Header 渲染在 #rating-root 本身 */}
        <Rating progress={progress} />

        {/* Footer 用 Portal 渲染到 #rating-footer（若有這個節點） */}
        {ratingFooterEl &&
          createPortal(
            <RatingFooter
              prev={footerState.prev}
              next={footerState.next}
              disabled={footerState.disabled}
            />,
            ratingFooterEl
          )}
      </>
    );
  }

  root.render(<App />);
}
