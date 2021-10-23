import styled from 'styled-components';

const StyledStar = styled.img`
  width: 28px;
  height: 26px;
`;

const RatingText = styled.div`
  object-fit: contain;
  font-family: Manrope;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.48px;
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
`;

const StyledNumber = styled.div`
  margin-right: 10px;
  object-fit: contain;
  font-family: Manrope;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 20px;
`; 

 const Rating = ({rating}) => {
  const ratingMax = 5;
  let ratingRest = rating + 1;
  const formatedRating = (Math.round(rating * 100) / 100).toFixed(1);
  const RatingList = []; 

  for(let i = 0; i < ratingMax; i++ ) {
    ratingRest--;
    let star = '/assets/star-solid.svg'

    if(i >= rating) {
     star = '/assets/star.svg';
    }

    if(ratingRest > 0.3  && ratingRest < 0.7 ) {
      star = '/assets/star-half.svg';
    }

    RatingList.push(
      <a>
        <img key={star+i} className="uk-svg rating-star" src={star} uk-svg="" alt={rating} />
      </a>
    );
  }

  return (
    <Container className="uk-container">
        <div className="uk-inline uk-margin" style={{width: '100%'}}>
            <RatingText className="uk-position-flex uk-overlay uk-overlay-default uk-flex uk-flex-middle">
              Verdict
            </RatingText>
            <div className="uk-position-right uk-overlay uk-overlay-default uk-flex uk-flex-middle">
            <StyledNumber>{formatedRating}</StyledNumber>
            <div> { RatingList } </div>
          </div>
      </div>
    </Container>
  )
}

export default Rating