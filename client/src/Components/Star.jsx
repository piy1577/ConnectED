import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const Star = ({ n, set, rating }) => {
    return (
        <>
            <AiOutlineStar
                style={rating >= n && { display: "none" }}
                onClick={() => {
                    set(n);
                }}
            />
            <AiTwotoneStar
                style={rating < n && { display: "none" }}
                onClick={() => {
                    set(n);
                }}
            />
        </>
    );
};
export default Star;
