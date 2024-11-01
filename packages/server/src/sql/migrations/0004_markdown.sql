-- Migration number: 0004 	 2024-11-01T11:37:08.746Z
ALTER TABLE pages ADD COLUMN pureHtmlContentUrl TEXT;
ALTER TABLE pages ADD COLUMN mdContentUrl TEXT;
