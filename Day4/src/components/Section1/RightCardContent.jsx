export const RightCardContent = (props) => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-lg leading-normal text-white mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sint
            hic. A sint molestias earum.
          </p>
          <div className="flex items-center gap-1 mt-4 px-1">
            <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full">
              {props.tag}
            </button>

            <button className="bg-blue-600 text-white h-12 w-12 flex items-center justify-center rounded-full -ml-3">
              <i className="ri-arrow-right-line text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
