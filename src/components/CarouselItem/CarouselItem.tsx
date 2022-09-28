
import { Link } from 'react-router-dom';
import { CarouselItemModel } from '../../models/carousel-item.model';
const CarouselItem = (model: CarouselItemModel) => {
    return (
        <div>
            <img src={model.imageSrc} className="rounded-3xl" alt="Item 1" />
            <Link to={'article/' + model.slug} >
                <span className="font-normal cursor-pointer bg-none absolute top-1/2 left-1/2 text-sm sm:text-2xl md:text-5xl hover:text-primary -translate-x-1/2 -translate-y-1/2 text-white">
                    {model.text}
                </span>
            </Link>
        </div >
    )

}

export default CarouselItem;
