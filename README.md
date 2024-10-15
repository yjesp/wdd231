<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Join the Chamber of Commerce</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <!-- Include your header/navigation -->
  </header>

  <main>
    <h1>Join the Chamber of Commerce</h1>
    <form action="thankyou.html" method="GET">
      <!-- First Name -->
      <label for="first-name">First Name:</label>
      <input type="text" id="first-name" name="first-name" required autocomplete="given-name" title="Please enter your first name.">

      <!-- Last Name -->
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name" name="last-name" required autocomplete="family-name" title="Please enter your last name.">

      <!-- Organizational Title -->
      <label for="org-title">Organization Title:</label>
      <input type="text" id="org-title" name="org-title" autocomplete="organization-title" pattern="[a-zA-Z-\s]{7,}" title="Title must be at least 7 characters, letters, hyphens, and spaces only.">

      <!-- Email -->
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required autocomplete="email" placeholder="you@example.com" title="Please enter a valid email address.">

      <!-- Phone Number -->
      <label for="mobile">Mobile Number:</label>
      <input type="tel" id="mobile" name="mobile" required autocomplete="tel" title="Please enter your mobile phone number.">

      <!-- Organization Name -->
      <label for="org-name">Organization Name:</label>
      <input type="text" id="org-name" name="org-name" required autocomplete="organization" title="Please enter your organization's name.">

      <!-- Membership Level Selection -->
      <label for="membership">Membership Level:</label>
      <select id="membership" name="membership" required>
        <option value="np">NP Membership (Non-Profit)</option>
        <option value="bronze">Bronze Membership</option>
        <option value="silver">Silver Membership</option>
        <option value="gold">Gold Membership</option>
      </select>

      <!-- Organization Description -->
      <label for="org-desc">Organization Description:</label>
      <textarea id="org-desc" name="org-desc" title="Describe your organization"></textarea>

      <!-- Timestamp -->
      <input type="hidden" name="timestamp" id="timestamp">

      <!-- Submit Button -->
      <button type="submit">Submit Application</button>
    </form>

    <!-- Membership Cards with Modals -->
    <section id="membership-cards">
      <div class="membership-card" id="np-card">
        <h2>NP Membership</h2>
        <button onclick="showModal('np-modal')">Learn More</button>
      </div>
      <div class="membership-card" id="bronze-card">
        <h2>Bronze Membership</h2>
        <button onclick="showModal('bronze-modal')">Learn More</button>
      </div>
      <div class="membership-card" id="silver-card">
        <h2>Silver Membership</h2>
        <button onclick="showModal('silver-modal')">Learn More</button>
      </div>
      <div class="membership-card" id="gold-card">
        <h2>Gold Membership</h2>
        <button onclick="showModal('gold-modal')">Learn More</button>
      </div>
    </section>

    <!-- Modals for Membership Details -->
    <dialog id="np-modal">
      <h3>NP Membership Benefits</h3>
      <p>Non-profit organizations can join for free with event access and basic benefits.</p>
      <button onclick="closeModal('np-modal')">Close</button>
    </dialog>

    <dialog id="bronze-modal">
      <h3>Bronze Membership Benefits</h3>
      <p>Access to basic events, training, and directory listings.</p>
      <button onclick="closeModal('bronze-modal')">Close</button>
    </dialog>

    <dialog id="silver-modal">
      <h3>Silver Membership Benefits</h3>
      <p>Includes enhanced listings, training, and advertising opportunities.</p>
      <button onclick="closeModal('silver-modal')">Close</button>
    </dialog>

    <dialog id="gold-modal">
      <h3>Gold Membership Benefits</h3>
      <p>Premium advertising, sponsorship, and event participation.</p>
      <button onclick="closeModal('gold-modal')">Close</button>
    </dialog>
  </main>

  <footer>
    <!-- Include your footer -->
  </footer>

  <script>
    // Pre-fill the timestamp field
    document.getElementById('timestamp').value = new Date().toLocaleString();

    // Modal Show and Close Functions
    function showModal(id) {
      document.getElementById(id).showModal();
    }

    function closeModal(id) {
      document.getElementById(id).close();
    }
  </script>
</body>
</html>
