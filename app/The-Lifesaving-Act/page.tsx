import Link from "next/link";
import BlogImage from "../assets/blog_2.jpeg";
import Image from "next/image";

const BlogsPage = () => {
  return (
    <>
      <div className="flex justify-center">
        {/* Add any header or additional content if needed */}
      </div>
      <Link href="/Why-Blood-Donation-is-Important">
        <div className="h-full w-full flex justify-center">
          <Image
            src={BlogImage.src}
            alt={"bloodDonation"}
            height={1000}
            width={1000}
            className="h-1/3 w-1/2"
          />
        </div>
      </Link>
      <div className="max-w-4xl mx-auto p-6 text-black">
        <h1 className="text-3xl font-bold mb-6">The Lifesaving Act of Blood Donation: Why You Should Donate Blood</h1>
        <p className="mb-4">
          Blood donation is not just a noble deed, but a mission to save lives. Every two seconds, someone in the world needs blood. The demand for blood is constant, whether it’s for traumatic injuries, cancer treatment, chronic illnesses, or surgery. But still, just a small percentage of eligible donors make an annual donation, despite the urgent need.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Blood Donation Matters</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li>
            Hospitals always require blood. Donated blood is used for handling a variety of medical situations including:
            <ul className="list-disc ml-6">
              <li>Emergencies</li>
              <li>Surgeries</li>
              <li>Chronic Illnesses</li>
            </ul>
          </li>
          <li>
            Blood donation is a noble act that benefits everyone:
            <ul className="list-disc ml-6">
              <li>Save Lives</li>
              <li>Support Medical Research</li>
              <li>Promote Community Health</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">Benefits of Donating Blood</h2>
        <p className="mb-4">
          Health Benefits for Donors: Blood donation is not only beneficial for the recipient but is also beneficial for donors. Know how!
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>It reduces the risk of heart disease by reducing iron levels in the blood, helping in lowering the risk of heart disease.</li>
          <li>You get a free health check-up: Donors receive a mini-physical examination before blood donation, which includes checks for blood pressure, hemoglobin levels, and more.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Criteria for Blood Donation</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Age: The donor age should be at least 16 or 17 years old.</li>
          <li>Weight: Donors weight must be at least 110 pounds (50 kg).</li>
          <li>Chronic Illnesses: People with diabetes and hypertension can also donate blood if their health conditions are well-controlled.</li>
          <li>Recent Illnesses and Infections: Donors who recently have had a cold, flu, or other infections should wait until they have fully recovered.</li>
          <li>Medications: People taking certain medications may temporarily or permanently disqualify as a donor. It is important to discuss this with your doctor or people at the blood donation center.</li>
          <li>Travel History: It is important to share your travel history with your doctor or people at the blood donation center to eliminate future complications.</li>
          <li>Pregnancy and Recent Childbirth: Post pregnancy a woman should wait for at least six weeks for donating blood.</li>
          <li>Previous Donations: Donors must wait 56 days (8 weeks) between donations.</li>
        </ul>

        <p className="mt-6">
          As you can see, blood donations are crucial to helping patients of all ages and backgrounds. There is no substitute for blood, and it can’t be manufactured. Every day, blood donors save lives through their generosity.
        </p>
      </div>
    </>
  );
};

export default BlogsPage;
