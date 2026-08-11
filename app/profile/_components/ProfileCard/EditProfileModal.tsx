"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { updateProfileAction } from "../../_action/updateProfile";

type Props = {
  open: boolean;
  onClose: () => void;
  profile: {
    github: string | null;
    linkedin: string | null;
  };
};

const EditProfileModal = ({
  open,
  onClose,
  profile,
}: Props) => {
  const [github, setGithub] = useState(
    profile.github || ""
  );

  const [linkedin, setLinkedin] = useState(
    profile.linkedin || ""
  );

  const [loading, setLoading] =
    useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      await updateProfileAction({
        github,
        linkedin,
      });

      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="profile-modal">
        <DialogTitle className="profile-modal-title">
          Update Profile
        </DialogTitle>

        <div className="profile-modal-form">
          <div className="profile-input-group">
            <FaLinkedin size={20} />

            <Input
              value={linkedin}
              onChange={(e) =>
                setLinkedin(e.target.value)
              }
              placeholder="LinkedIn URL"
              className="profile-input"
            />
          </div>

          <div className="profile-input-group">
            <FaGithub size={20} />

            <Input
              value={github}
              onChange={(e) =>
                setGithub(e.target.value)
              }
              placeholder="GitHub URL"
              className="profile-input"
            />
          </div>

          <div className="profile-modal-actions">
            <Button
              variant="outline"
              onClick={onClose}
              className="cancel-btn"
            >
              Cancel
            </Button>

            <Button
              onClick={handleUpdate}
              disabled={loading}
              className="save-btn"
            >
              {loading
                ? "Updating..."
                : "Save Changes"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;