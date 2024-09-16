export default function footer() {
  return (
    <>
      <div className="bg-[#8A0303] w-full h-1/4">
      <div className=" h-8 bg-[black] w-full flex ">
      </div>
        <div className="p-3 bg-[#8A0303]">
          <div>
            <div className="logo">
              <h1 className="text-white mb-4 mt-4">Blomo</h1>
              <p> Building Blood Bridges, Saving Lives</p>
              <p>© 2024 Blomo. All rights reserved.</p>
            </div>
            <p></p>
          </div>
          <div>
            <p>Contact Us</p>
            <p>Email: support@blomo.com</p>
            <p>Phone: +1 (800) 123-4567</p>
          </div>
        </div>
        <div className="flex justify-end items-end bg-[black]">
          <div
            className="flex gap-3 text-lg hover:cursor-pointer p-1 pr-6"
            style={{ fontFamily: "DosisMedium" }}
          >
            <a href="#aboutUs">About Us</a>
            <a href="#howItWorks">How It Works</a>
            <a href="/blogs">Blog</a>
            <a href="/contact">Contact</a>
            <a href="/privacyPolicy">Privacy Policy</a>
            <a href="/termsOfService">Terms of Service</a>
          </div>
        </div>
      </div>
    </>
  );
}
