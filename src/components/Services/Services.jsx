import React from "react";

function Services() {
  return (
    <div>
      <div class="row">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action "
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >
              Home
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
            >
              Profile
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages"
            >
              Messages
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="settings"
            >
              Settings
            </a>
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show "
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quibusdam earum dolore nulla! Earum itaque error eius
              provident harum ea molestias aliquam odit nulla aperiam eos,
              possimus ut quos! Ab?
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              letrim trlterkngsd, mgskajng
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
