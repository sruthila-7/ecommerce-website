import React, { useEffect, useRef } from 'react';
import './Categories.css';

const Categories = () => {

    const carouselRef = useRef(null);
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);

    let isDragStart = false , prevPageX, prevScrollLeft;  
    
    const showHideIcons = () => {

      let scrollWidth = carouselRef.current.scrollWidth -  carouselRef.current.clientWidth;

      leftArrowRef.current.style.display = carouselRef.current.scrollLeft === 0 ? "none" : "block";
      rightArrowRef.current.style.display = carouselRef.current.scrollLeft === scrollWidth ? "none" : "block";
    }
    

    useEffect(() => {
      if (carouselRef.current && leftArrowRef.current && rightArrowRef.current) {
        const firstImg = carouselRef.current.querySelectorAll("img")[0];
    
        let firstImgWidth = firstImg.clientWidth + 14;
    
        leftArrowRef.current.addEventListener("click", () => {
          carouselRef.current.scrollLeft -= firstImgWidth;
          setTimeout(() => showHideIcons(), 60);
        });
    
        rightArrowRef.current.addEventListener("click", () => {
          carouselRef.current.scrollLeft += firstImgWidth;
          setTimeout(() => showHideIcons(), 60);
        });
    
        carouselRef.current.addEventListener("mousedown", dragStart);
        carouselRef.current.addEventListener("touchstart", dragStart);
        carouselRef.current.addEventListener("mousemove", dragging);
        carouselRef.current.addEventListener("touchmove", dragging);
        carouselRef.current.addEventListener("mouseup", dragStop);
        carouselRef.current.addEventListener("mouseleave", dragStop);
        carouselRef.current.addEventListener("touchend", dragStop);
      }
    
      return () => {
        if (carouselRef.current && leftArrowRef.current && rightArrowRef.current) {
          const firstImg = carouselRef.current.querySelectorAll("img")[0];
          let firstImgWidth = firstImg.clientWidth + 14;
          leftArrowRef.current.removeEventListener("click", () => {
            carouselRef.current.scrollLeft -= firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
          });
    
          rightArrowRef.current.removeEventListener("click", () => {
            carouselRef.current.scrollLeft += firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
          });
    
          carouselRef.current.removeEventListener("mousedown", dragStart);
          carouselRef.current.removeEventListener("touchstart", dragStart);
          carouselRef.current.removeEventListener("mousemove", dragging);
          carouselRef.current.removeEventListener("touchmove", dragging);
          carouselRef.current.removeEventListener("mouseup", dragStop);
          carouselRef.current.removeEventListener("mouseleave", dragStop);
          carouselRef.current.removeEventListener("touchend", dragStop);
        }
      };
    }, [carouselRef, leftArrowRef, rightArrowRef]);
    

    
    const dragStart = (e) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carouselRef.current.scrollLeft;
    }
    
    

    const dragging = (e) => {
      if(!isDragStart) return;
      e.preventDefault();
      carouselRef.current.classList.add("dragging");
      let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX ;
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
      }
      showHideIcons();
    }

    const dragStop = () => {
      isDragStart = false;
      carouselRef.current.classList.remove("dragging");
    }

     
    return(
        <>
        <div className="categories">
        <div className="main">
          
          <i ref={leftArrowRef} id="left" className="fa-solid fa-angle-left" style={{color: "#ffffff"}}></i>
          <div className="carousel" ref={carouselRef}>

            <img src="./assets/women.png" alt="men's clothing" draggable="false" />
            <img src="./assets/men.png" alt="women's clothing" draggable="false" />
            <img src="./assets/jewelry.png" alt="jewelry" draggable="false" />
            <img src="./assets/electronics.png" alt="electronics"draggable="false" />
            

          </div>
          <i ref={rightArrowRef} id="right" className="fa-solid fa-angle-right" style={{color: "#ffffff"}}></i>
        </div>
        </div>
        </>
    )
}

export default Categories;