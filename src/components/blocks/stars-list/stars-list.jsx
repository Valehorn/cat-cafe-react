import React from "react";
import Button from "/src/components/ui/button/button";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import { StarItem, StarList, StyledStarsList } from "./styles";
import { AppRoute } from "/src/const";

// список известных котов
function StarsList({
    stars, // коты
    level // уровень заголовка списка.
}) {
    return (
        <StyledStarsList>
            {stars?.length ? (
                <>
                    <Title level={level}>Наши звёзды</Title>
                    <StarList $isGridList>
                        {stars.map((star) => (
                            <StarItem key={star.id}>
                                <StarCard {...star} />
                            </StarItem>
                        ))}
                    </StarList>
                </>
            ) : null}
            <Button minWidth={353} link={AppRoute.BUY}>
                Купить билет
            </Button>
        </StyledStarsList>
    );
}

export default StarsList;
