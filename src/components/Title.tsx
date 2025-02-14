const Title = () => {
  return (
    <header className="w-[38rem] mt-[5rem]">
      {/* Logo */}
      <figure className="flex justify-center items-center mb-[1rem]">
        <img
          src="/join-our-newsletter-master/resources/logo.svg"
          alt="Company logo"
        />
      </figure>

      {/* Title */}
      <h1 className="mb-[1.2rem] text-center text-5xl font-medium">
        Join our newsletter
      </h1>

      {/* Text */}
      <p className="text-center text-xl text-[#6C727F]">
        Keep up with our latest collections, exclusive deals, and special
        offers! We introduce a new collection every week, so stay tuned to
        snag the hottest items just for you.
      </p>
    </header>
  );
};

export default Title;
