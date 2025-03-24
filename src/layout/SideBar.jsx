import { Link, useHistory } from "react-router-dom";
import {
  Home,
  Hash,
  MessageSquare,
  Star,
  Bookmark,
  Briefcase,
  Users,
  Diamond,
  CheckCircle,
  User,
  MoreHorizontal,
} from "lucide-react";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    history.push("/");
  };

  return (
    <div className="sidebar">
      <h1>Twitter</h1>
      <ul>
        <li className="sidebar-item bold">
          <Link to="/" className="sidebar-link">
            <Home style={{ marginRight: "5px" }} />
            Anasayfa
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <Hash style={{ marginRight: "5px" }} />
            Keşfet
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <MessageSquare style={{ marginRight: "5px" }} />
            Mesajlar
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <Star style={{ marginRight: "5px" }} />
            Grok
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <Bookmark style={{ marginRight: "5px" }} />
            Yer İşaretleri
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <Briefcase style={{ marginRight: "5px" }} />
            İşler
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <Users style={{ marginRight: "5px" }} />
            Topluluklar
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <Diamond style={{ marginRight: "5px" }} />
            Premium
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <CheckCircle style={{ marginRight: "5px" }} />
            Onaylı Kuruluşlar
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile" className="sidebar-link">
            <User style={{ marginRight: "5px" }} />
            Profil
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="" className="sidebar-link">
            <MoreHorizontal style={{ marginRight: "5px" }} />
            Daha Fazla
          </Link>
        </li>
      </ul>
      <button className="button-gonderi">Gönderi Yayınla</button>
      <Link to="/profile" className="tweet-form-header">
        <Avatar alt={username} src="/img/default-avatar.png" />
        <p className="username">{username}</p>
      </Link>
      <button className="button-cikis" onClick={handleLogout}>
        Çıkış Yap
      </button>
    </div>
  );
};

export default SideBar;
