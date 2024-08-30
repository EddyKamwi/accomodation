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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.191216114542!2d28.40564579668024!3d-15.366127093682708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408901c08b8515%3A0x40c6681d76d980ea!2sKumawa%20Lodge!5e0!3m2!1sen!2szm!4v1725016638893!5m2!1sen!2szm"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </>
  );
}
