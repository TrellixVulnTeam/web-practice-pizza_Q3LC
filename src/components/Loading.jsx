import React from 'react';
import ContentLoader from "react-content-loader"

function Loading() {
    return (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={476}
        viewBox="0 0 280 476"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="8" y="280" rx="4" ry="4" width="259" height="29" /> 
        <rect x="7" y="320" rx="4" ry="4" width="260" height="63" /> 
        <rect x="7" y="398" rx="8" ry="8" width="118" height="32" /> 
        <rect x="139" y="399" rx="13" ry="13" width="120" height="32" /> 
        <circle cx="133" cy="138" r="119" />
    </ContentLoader>
    );
}

export default Loading;