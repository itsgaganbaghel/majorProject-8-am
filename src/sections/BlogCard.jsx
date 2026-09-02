import SetBg from "./SetBg";

const BlogCard = ({ data }) => {
    return (
        <section className="blog-content relative pt-[150px] px-[150px]">
            <div className=" flex flex-wrap h-auto gap-6 max-w-[100%] justify-between ">
                {data.map((info, i) => {
                    return (
                        <>
                            <div key={i} className={"relative bg-red-300 lg:h-[300px] lg:w-[50%] h-[200px] w-full"}>
                                <SetBg bg={info.img} />
                            </div>
                            <div className="w-full  lg:w-[47%] flex  flex-col justify-center">
                                <h3>
                                    <q className="blog-content-h3 font-bold text-[20px]">
                                        {info.heading}
                                    </q>
                                </h3>
                                <p className="blog-content-p text-[#465b52] pt-[15px] pb-[20px] leading-[1.2] font-semibold">
                                    {info.description}
                                </p>
                                <a
                                    href="#"
                                    className=" text-[12px] font-bold hover:text-[#088178]"
                                >
                                    Continue reading
                                </a>
                            </div>
                        </>
                    );
                })}
                ;
            </div>
        </section>
    );
};

export default BlogCard;