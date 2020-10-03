# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Everything is released. Yay! :tada:

## [1.11.0] - 2019-10-02

### Added
- [[extension] Collection>>asArray()](https://github.com/ngarbezza/oow/issues/29)
- [[extension] Object>>childResponsibility()](https://github.com/ngarbezza/oow/issues/30)
- [[extension] removeAll() for Array and Set](https://github.com/ngarbezza/oow/issues/23): also making `clear()` polymorphic (existing method in `Set`).

Also, some improvements to the repo were made: eslint rules, issue templates, upgrading dependencies.

## [1.10.0] - 2019-11-19

### Fixed
- [[bug] sum returns an odd result if the resulting value from summing function is zero](https://github.com/ngarbezza/oow/issues/28)

### Added
- [[extension] allButFirst(), allButLast()](https://github.com/ngarbezza/oow/issues/12): Thank you, @federicostulich !
- [[extension] union(set) and intersection(set) for Sets](https://github.com/ngarbezza/oow/issues/24): Thank you, @federicostulich !
- [[extension] map(f) for Sets](https://github.com/ngarbezza/oow/issues/26)
- [[extension] atRandom() and sample() for all collections](https://github.com/ngarbezza/oow/issues/17)

## [1.9.0] - 2019-11-10

### Added
- [[extension] Array#add (#13)](https://github.com/ngarbezza/oow/issues/13)
- [[new object] DayOfMonth with essential behavior (#14)](https://github.com/ngarbezza/oow/issues/14)
- [[extension] Function#value(...args)](https://github.com/ngarbezza/oow/issues/25)
- [[extension] String#reverse()](https://github.com/ngarbezza/oow/issues/18)
- [[extension] Set#remove(obj) and Array#remove(obj)](https://github.com/ngarbezza/oow/issues/22)

## [1.8.0] - 2019-10-10

### Added
- [Date.today(), Date.yesterday(), Date.tomorrow() (#9)](https://github.com/ngarbezza/oow/issues/9)
- [day(), monthNumber(), year() for Date objects (#10)](https://github.com/ngarbezza/oow/issues/10)
- [Point class with essential behavior (#11)](https://github.com/ngarbezza/oow/issues/11)

## [1.7.0] - 2019-10-01

### Added
- [Set.with(objs) and Array.with(objs) (#7)](https://github.com/ngarbezza/oow/issues/7)
- [at() for strings and arrays (#5)](https://github.com/ngarbezza/oow/issues/5)

## [1.6.1] - 2019-02-24

### Added
- [asSet() for array and strings (#1)](https://github.com/ngarbezza/oow/issues/1)
- [occurrencesOf(object) for array and strings (#2)](https://github.com/ngarbezza/oow/issues/2)
- [includesAllOf(collection) for arrays and strings (#3)](https://github.com/ngarbezza/oow/issues/3)
- [Add existing messages to Set, which is a collection (#4)](https://github.com/ngarbezza/oow/issues/4)
- [forEach() for strings (#6)](https://github.com/ngarbezza/oow/issues/6)
- [equals() for strings (#8)](https://github.com/ngarbezza/oow/issues/8)
- Messages on Set to have more polymorphism: `filter`, `includes`, `equals`, `asSet`

## [1.5.1] - 2019-02-23

### Fixed
- Changes to project structure: readme, changelog, dotfiles.
- Upgrade to latest version of Testy (v3.1.1)

[Unreleased]: https://github.com/ngarbezza/oow/compare/v1.11.0...HEAD
[1.11.0]: https://github.com/ngarbezza/oow/compare/v1.10.0...v1.11.0
[1.10.0]: https://github.com/ngarbezza/oow/compare/v1.9.0...v1.10.0
[1.9.0]: https://github.com/ngarbezza/oow/compare/v1.8.0...v1.9.0
[1.8.0]: https://github.com/ngarbezza/oow/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/ngarbezza/oow/compare/v1.6.1...v1.7.0
[1.6.1]: https://github.com/ngarbezza/oow/compare/v1.5.1...v1.6.1
[1.5.1]: https://github.com/ngarbezza/oow/compare/v1.5.0...v1.5.1
