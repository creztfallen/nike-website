import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  const ratings = [4.3, 4.5, 4.9, 4.7];

  return (
    <div
      className="flex flex-1 flex-col 
        w-full max-sm:w-full"
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating width={24} height={24}" />
        <p className="text-sm text-slate-gray">
          ({ratings[Math.floor(Math.random() * ratings.length)]})
        </p>
      </div>
      <h3 className="mt-2 font-palanquin leading-normal font-semibold text-2xl">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-green text-2lx leading-normal">
        <span className="text-zinc-500">$ </span>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
