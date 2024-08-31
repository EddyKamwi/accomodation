import { Navbar } from "@/components";
export const metadata = {
  title: "Google Map | Lodges",
  description: "This is a lodge",
  author: "Qualis Designers",
};

export default function Googlemap() {
  return (
    <>
      <Navbar map="bg-gray-900" />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <iframe
          className="map w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15388.764863991855!2d28.4056458!3d-15.3661271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408901c08b8515%3A0x40c6681d76d980ea!2sKumawa%20Lodge!5e0!3m2!1sen!2szm!4v1725077974491!5m2!1sen!2szm"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </>
  );
}
