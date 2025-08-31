import React, { useState, useEffect } from "react";
import "./backTop.css"; // 引入样式文件

interface BackToTopProps {
  threshold?: number; // 滚动距离阈值
}

const BackToTop: React.FC<BackToTopProps> = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [threshold]);

  // 点击回到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <button>回到顶部</button>
    </div>
  );
};

export default BackToTop;
