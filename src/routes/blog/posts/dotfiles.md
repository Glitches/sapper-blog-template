---
title: My dotfiles
date: "2021-11-02T08:38:00.000Z"
---

It's been a life since I don't write a blog post, so for a fresh start I want to
share my `dotfiles` repo:
[Dotfiles](https://github.com/glitches/dotfiles)

I'm planning to add Swaybar in the future, but for now, the most interesting
thing is all lua `neovim` config. It's still a work in progress and my attempt
to learn both lua and neovim/vim.
Most of this config comes from the one of Jose Elia Alvarez, author of
`null-ls` and other interesting plugins.

Speaking of Neovim, the integrations with `liblua` and `lsp` work like a charm and make
it super powerful, even more than Vim.
I.E.

```lua
local lspconfig = require("lspconfig")
local null_ls = require("null-ls")
local b = null_ls.builtins

local sources = {
	b.formatting.prettierd.with({
		filetypes = { "html", "json", "yaml", "markdown", "typescript", "typescriptreact" },
	}),
	b.formatting.stylua,
	b.formatting.trim_whitespace.with({ filetypes = { "tmux", "teal", "zsh" } }),
	b.formatting.shfmt,
	b.diagnostics.write_good,
	b.diagnostics.markdownlint,
	b.diagnostics.teal,
	b.diagnostics.stylua,
	b.diagnostics.shellcheck.with({ diagnostics_format = "#{m} [#{c}]" }),
	b.code_actions.gitsigns,
}

local M = {}
M.setup = function(on_attach)
	null_ls.config({
		debug = true,
		sources = sources,
	})
	lspconfig["null-ls"].setup({ on_attach = on_attach })
end

return M
```

This snippet requires lspconfig package and just pass an object to the `null-ls`
config.

The dowsides I personally see are `vim` object being global and hidden buffers used for
internal operations in a way that makes visible buffer numbers seldon non
consequent.

Anyway I'm determined to replace VsCode as main editor..

Andrea
