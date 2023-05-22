# CMS-BeMusic
BeMusic is a Multi-purpose Music Sharing and Streaming Platform. It can be used to Create Many Different Types of Music Related sites, Including Sites Similar to Soundcloud, Mixcloud, Spotify.
 

## Feature
- Content Management
- Automatically Import and Update Artists, Albums, Tracks, Channels
- User Artists
- Automation Functionality On/Off System
- Follower System
- Users can Setup Their Profile and Upload and Share Music
- Multiple Homepages
- Users can Comment, Repost, Like, Embed their Favorite Tracks and Albums
- Appearance Editor
- Pixel-perfect Professional Design
- SEO Tags for all Pages
- User and Artist Profiles Management
- Light and Dark Theme
- Editable Landing Page
- Google analytics Integrated
- Users can Add Songs, Albums and Artists
- Playlists System
- Fully-featured Player Including Shuffle, Repeat, Lyrics, Queue
- Premium Subscription
- Paste Ad Codes
- Ad Slots in Admin Panel
- Google Analytics
- and more


## How to start

**1. Clone From Github**

```bash
git clone https://github.com/kothing/CMS-BeMusic.git
```

**2. Go to that folder**

```bash
cd CMS-BeMusic
```

**3. Required Configuration**
Permission for directories.

1. storage 777
1. bootstrap/cache 777
1. public 777

**4. Install Composer**

```php
composer install
```

**5. Create env file**

```bash
Create a .env file by cloning .env.example file
```

**6. Create a Database named**

```bash
your_database
```

**7. Run Migration & Seed**

```php
php artisan migrate:fresh --seed
```
