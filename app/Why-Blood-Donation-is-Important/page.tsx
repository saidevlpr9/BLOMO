import Link from "next/link";
import BlogImage1 from "../assets/blog1.jpg"
import Image from "next/image";
const BlogsPage = ()=>{
  return(
    <>
    <div className="flex justify-center">
  
    </div>
    <Link href="/Why-Blood-Donation-is-Important">
    <div className="h-full w-full flex justify-center">
      <Image src={BlogImage1.src} alt={"bloodDonation"} height={1000} width={1000} className="h-1/3 w-1/2"></Image>
    </div>
    </Link>
    <div className="max-w-4xl mx-auto p-6 text-black">
  <h1 className="text-3xl font-bold mb-6">Why is it Important to Donate Blood?</h1>
  <p className="mb-4">
    About 328 million people currently live in the U.S. Each year, approximately 6.8 million people in the U.S donate blood. Annually, this adds up to about 13.6 million units of whole blood collected for donation in the U.S. The Red Cross provides about 40% of our nation’s blood and blood cell components to donors. Your blood donations are used for patients in need of surgery, cancer treatment, and transfusions for blood loss from traumatic injuries.
  </p>
  <p className="mb-4">
    Want to know more about the blood supply in the U.S.? Visit the <a href="#" className="text-blue-500 underline">Facts About Blood Supply</a> page.
  </p>

  <h2 className="text-2xl font-semibold mb-4">Why Cancer Patients Need Blood</h2>
  <p className="mb-4">
    For cancer patients, blood transfusions can act as a resource to implement platelets back into the body after heavy treatments such as chemo or radiation therapy. Blood cells made in the bone marrow are often at risk, and this lack of blood cell production can cause chronic diseases over time, affecting organs such as the kidneys, spleen, and liver.
  </p>

  <h2 className="text-2xl font-semibold mb-4">The Importance of Diversity in the Blood Supply</h2>
  <p className="mb-4">
    Maintaining diversity in the blood supply is essential. Some blood types are quite rare and are likeliest to be found among people with shared ancestral origins. Visit our <a href="#" className="text-blue-500 underline">Blood and Diversity</a> page for more information on the need for diversity in the blood supply.
  </p>

  <h2 className="text-2xl font-semibold mb-4">Why CMV Negative Blood is Important</h2>
  <p className="mb-4">
    CMV, known as cytomegalovirus, is a flu-like virus to which an estimated 85% of adults in the United States will be exposed by age 40. This means that most adults in the U.S. carry CMV antibodies. However, these antibodies may pose a danger to vulnerable patients. That’s why CMV-negative blood is preferred for use in specific cases, particularly for pediatric conditions, newborns, and immune-compromised adults.
  </p>

  <h2 className="text-2xl font-semibold mb-4">Blood Donation Types</h2>
  <p className="mb-4">
    Blood donations can yield various blood products, including red cells, platelets, and plasma. You may be familiar with whole blood donations from workplace, school, or community drives, but there are other ways to help through the Red Cross.
  </p>

  <h3 className="text-xl font-semibold mb-4">Whole Blood Donation vs. Power Red Donation</h3>
  <p className="mb-4">
    Whole blood donation includes red blood cells, white blood cells, platelets, and plasma. These donations help patients with cancer, blood disorders, and traumatic injuries. Power Red donations enable the donor to safely donate two units of red blood cells in one appointment using a machine to separate components. The Red Cross encourages donors with O+, O-, A-, and B- blood types to consider Power Red donations. For more information, visit the <a href="#" className="text-blue-500 underline">Power Red Donations</a> page.
  </p>

  <h3 className="text-xl font-semibold mb-4">Platelet Donation vs. Plasma Donation</h3>
  <p className="mb-4">
    Platelets help the body create clots to stop bleeding and are critical for cancer, chronic disease, and trauma patients. During platelet donation, blood is drawn from one arm, separated through a centrifuge, and the red cells are returned via the other arm. An appointment is required at a specific Red Cross donation center.
  </p>
  <p className="mb-4">
    Plasma donations, also called plasmapheresis, involve drawing blood and separating plasma through a centrifuge, with the red blood cells and platelets returned to the donor. Plasma is used for patients with severe burns, cancer, or other life-threatening conditions. Donors with AB blood type are especially encouraged to donate plasma.
  </p>

  <p className="mt-6">
    As you can see, blood donations are crucial to helping patients of all ages and backgrounds. There is no substitute for blood, and it can’t be manufactured. Every day, blood donors save lives through their generosity.
  </p>
</div>

    </>
  )
}
export default BlogsPage;