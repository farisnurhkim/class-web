import { Structure } from "@/components/Structure";
import H2 from "@/components/ui/H2";
import HomePage from "@/components/layout/HomePage";
import StudentsPage from "@/components/layout/StudentsPage";
import GalleryPage from "@/components/layout/GalleryPage";
import ChatsPage from "@/components/layout/ChatsPage";
import { currentUser } from "@/lib/currentUser";
import SignInButton from "@/components/signin-button";
import Footer from "@/components/Footer";
import ModalTrigerAi from "@/components/modal/modal-triger/modal-triger-ai";
import ModalTrigerTeacherDay from "@/components/modal/modal-triger/modal-teacher-day-triger";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <section id="home" className="pt-2 relative">
        <div className="mt-24">
          <div className="container">
            <div className="mx-4">
              <HomePage />
            </div>
          </div>
        </div>
      </section>

      <section id="structure" className="pt-8">
        <div className="mt-5">
          <div className="container">
            <div className="mx-4">
              <H2 className="mb-5 pt-12 text-2xl md:text-3xl">Structure</H2>
              <Structure />
            </div>
          </div>
        </div>
      </section>


      <section id="students" className="pt-8">
        <div className="mt-5">
          <div className="container">
            <div className="mx-4">
              <StudentsPage />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="pt-8">
        <div className="mt-5">
          <div className="container">
            <div className="mx-4">
              <GalleryPage />
            </div>
          </div>
        </div>
      </section>

      <section id="chat" className="pt-8">
        <div className="mt-5 pb-20">
          <div className="container">
            <div className="mx-4">
              <ChatsPage user={user} />
            </div>
            {!user && (<SignInButton />)}
          </div>
        </div>
      </section>

      <ModalTrigerAi user={user}/>
      <ModalTrigerTeacherDay />


    <Footer/>
      
    </>
  );
}


