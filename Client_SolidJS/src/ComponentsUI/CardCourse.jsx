import { styled } from "solid-styled-components";

export function CardCourse() {
    const SpanUICardCourse = styled("span")`
            position: absolute;
            margin-top: 8px;
            margin-left: 4px;
            background: #FCD34D;
  `
    // const Span = () => <SpanUICardCourse className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Principiante</SpanUICardCourse>

    const ContainerUICardCourse = styled('div')`
    cursor:pointer;
    &:focus,
    &:hover {
    
    }
    `
    return (
        // <Container />
        <ContainerUICardCourse class="sc-bdfBwQ znekp flex flex-col items-center">
            <div class="overflow-hidden bg rounded-lg relative bg-white shadow-lg" style="transition: transform 0.2s ease-in-out 0s;">
                <span class="inline-flex items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5  
            bg-yellow-100 text-yellow-600 shadow" style="position: absolute; top: 10px; left: 10px;">
                    <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">principiante</font></font>
                </span>
                <img src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/ytThumbnail_rtMv4Du.jpg" class="w-full"
                    style="transition: transform 0.2s ease-in-out 0s;" />
            </div>
            <div class="text-center info shadow-xl flex flex-col w-11/12 justify-center  relative bg-white -top-14 rounded-lg z-0 py-5 px-2" style=""><a href="/wetube"><h3 class="text-xl overflow-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[Pila completa] Codificación de clones de Youtube</font></font></h3><h4 class="mt-2 mb-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backend + Frontend + Distribución de YouTube</font></font></h4></a></div>
        </ContainerUICardCourse>

    )
}