import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import Gallery from "/src/components/ui/gallery/gallery";
import { StyledSection, StyledTitle } from "./styles";

// Галерея котокафе
function CafeGallery({ slides }) {
    return slides && slides.length ? (
        <StyledSection>
            <StyledTitle level={2} size={TitleSize.BIG}>
                Галерея нашего кафе
            </StyledTitle>
            <Gallery slides={slides} />
        </StyledSection>
    ) : null;
}

export default CafeGallery;
