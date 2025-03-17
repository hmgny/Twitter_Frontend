import { Link } from "react-router-dom";
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

const SideBar = () => {
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
      <div className="profile">
        <img src="/img/profil.png" alt="Profile" />
        <span>Hanife Merve Önal</span>
      </div>
      <button className="button-cikis">Çıkış Yap</button>
    </div>
  );
};

export default SideBar;
