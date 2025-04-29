import React, { useState, useEffect } from "react";
import top_arrow from "../../assets/images/png/top_arrow.png";

const TopToBottom = () => {
  const [visible, setVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div>
      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            right: "20px",
            zIndex: "345678",
          }}
        >
          {/* <button
            onClick={scrollToTop}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Scroll to Top
          </button> */}
          <img
            className="shadow"
            onClick={scrollToTop}
            style={{
              cursor: "pointer",
              marginBottom: "10px",
            }}
            width={50}
            height={50}
            src={top_arrow}
            alt="top_arrow"
          />
        </div>
      )}
    </div>
  );
};

export default TopToBottom;
