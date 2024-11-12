
import Product from "@/components/product/Hero";
import Home from "@/components/Home";
import Navbar from "@/components/Navigation/Navbar";
import { GetUser } from "@/lib/Action/user";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const App = async () => {
  const session = await getServerSession(authOptions);

  let user;
  
  if (session?.user.backendTokens) {
    const response = await GetUser(
      session.user.id,
      session.user.backendTokens.accessToken
    );
    if (Array.isArray(response) && response.length > 0) {
      user = response[0];
    }
  }

  return (
    <div className="">
      <Navbar user={user} />
      <Home/>
      <Product/>
    </div>
  );
};

export default App;
