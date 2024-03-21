export default function ImgCard({imgUrl}) {
    return(
        <div className="p-8 lg:p-12 bg-slate-50 dark:bg-slate-700 rounded-r-xl">
            <img src={imgUrl} alt="" className="rounded-xl shadow"></img>
        </div>
    );
};